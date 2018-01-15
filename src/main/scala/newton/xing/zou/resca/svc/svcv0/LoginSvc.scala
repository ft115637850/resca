package newton.xing.zou.resca.svc.svcv0
import newton.xing.zou.resca.svc.{JWT, encodeJwt}
import akka.http.scaladsl.model.{ContentType, HttpEntity, HttpResponse, MediaTypes}
import akka.http.scaladsl.server.Directives
import akka.http.scaladsl.server.directives.Credentials

class LoginSvc extends Directives {
  val userPwdAuthenticator: AuthenticatorPF[String] = {
    case p @ Credentials.Provided(id) if p.verify("p4ssw0rd")         => id
    case p @ Credentials.Provided(id) if p.verify("p4ssw0rd-special") => s"$id-admin"
  }

  val route = authenticateBasicPF(realm = "secure site", userPwdAuthenticator) {
    userName => login(userName)
  }

  def login(userName :String) =
    path("api" / "v0" / "login" ~ Slash.?) {
      get {
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
