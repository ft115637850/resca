package newton.xing.zou.resca.svc.svcv0
import newton.xing.zou.resca.svc.encodeJwt
import akka.http.scaladsl.model.{HttpEntity, HttpResponse, ContentType, MediaTypes}
import akka.http.scaladsl.server.Directives
import akka.http.scaladsl.server.directives.Credentials

class LoginSvc extends Directives {
  val myUserPassAuthenticator: AuthenticatorPF[String] = {
    case p @ Credentials.Provided(id) if p.verify("p4ssw0rd")         => id
    case p @ Credentials.Provided(id) if p.verify("p4ssw0rd-special") => s"$id-admin"
  }

  val route = get {
    path("api" / "v0" / "login" ~ Slash.?) {
      authenticateBasicPF(realm = "secure site", myUserPassAuthenticator) { userName => {
          val payload = Map[String, Any](
            "userName" -> userName
          )
          val token = encodeJwt(payload)
          val result = s"""{"token" : "$token"}""".stripMargin
          complete(HttpResponse(
            200,
            entity = HttpEntity(ContentType(MediaTypes.`application/json`), result)
          ))
        }
      }
    }
  }

}
