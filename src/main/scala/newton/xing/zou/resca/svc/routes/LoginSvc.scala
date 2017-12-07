package newton.xing.zou.resca.svc.routes

import akka.http.scaladsl.model.{HttpEntity, HttpResponse, ContentType, MediaTypes}
import akka.http.scaladsl.server.Directives
import scala.concurrent.ExecutionContext

class LoginSvc extends Directives {
  val route = get {
    path("api" / "v0" / "ping") {
      val result = """{"result" : "pong"}""".stripMargin
      complete(HttpResponse(
        200,
        entity = HttpEntity(ContentType(MediaTypes.`application/json`), result)
      ))
    }
  }

}
