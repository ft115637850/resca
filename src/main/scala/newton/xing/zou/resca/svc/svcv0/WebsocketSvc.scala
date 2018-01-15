package newton.xing.zou.resca.svc.svcv0

import akka.http.scaladsl.model.ws.{BinaryMessage, Message, TextMessage}
import akka.http.scaladsl.server.Directives
import akka.http.scaladsl.server.directives.Credentials
import akka.stream.ActorMaterializer
import akka.stream.scaladsl.{Flow, Sink, Source}
import newton.xing.zou.resca.svc.{JWT}

class WebsocketSvc(implicit materializer: ActorMaterializer) extends Directives {
  val userPwdAuthenticator: AuthenticatorPF[String] = {
    case p @ Credentials.Provided(JWT(usr)) if (p.verify("token") && usr.contains("userName")) => usr.toString()
  }

  val route = authenticateBasicPF(realm = "secure site", userPwdAuthenticator) {
    userName => routeWebsocket(userName)
  }

  def greeter: Flow[Message, Message, Any] =
    Flow[Message].mapConcat {
      case tm: TextMessage =>
        TextMessage(Source.single("Hello ") ++ tm.textStream ++ Source.single("!")) :: Nil
      case bm: BinaryMessage =>
        // ignore binary messages but drain content to avoid the stream being clogged
        bm.dataStream.runWith(Sink.ignore)
        Nil
    }

  def routeWebsocket(userName :String) = {
    path("api" / "v0" / "ws-echo") {
      get {
        handleWebSocketMessages(greeter)
      }
    }
  }
}
