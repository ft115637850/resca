package newton.xing.zou.resca.svc.svcv0
import newton.xing.zou.resca.svc.{decodeJwt, encodeJwt}
import akka.http.scaladsl.model.{ContentType, HttpEntity, HttpResponse, MediaTypes}
import akka.http.scaladsl.server.Directives
import akka.http.scaladsl.server.directives.Credentials

object JWT {
  def apply(payload: Map[String, Any]) = encodeJwt(payload)
  def unapply(token: String): Option[Map[String, Any]] = Some(decodeJwt(token))
}

class ContentSvc extends Directives {
  val tokenAuthenticator: AuthenticatorPF[Map[String, Any]] = {
    case Credentials.Provided(JWT(usr)) if usr.contains("userName") => usr
  }

  val route = authenticateOAuth2PF(realm = "secure site", tokenAuthenticator) {
    usr => getContent(usr)
  }

  def getContent(usr :Map[String, Any]) =
    path("api" / "v0" / "getContent" ~ Slash.?) {
      get {
        val result = """{
                       |  "friends": [
                       |    {
                       |      "id": "Tim",
                       |      "name": "Tim",
                       |      "gender": "male",
                       |      "status": "busy"
                       |    },
                       |    {
                       |      "id": "Alex",
                       |      "name": "Alex",
                       |      "gender": "male",
                       |      "status": "idle"
                       |    },
                       |    {
                       |      "id": "Carl",
                       |      "name": "Carl",
                       |      "gender": "male",
                       |      "status": "busy"
                       |    },
                       |    {
                       |      "id": "Steven",
                       |      "name": "Steven",
                       |      "gender": "male",
                       |      "status": "idle"
                       |    }
                       |  ]
                       |}""".stripMargin
        complete(HttpResponse(
          200,
          entity = HttpEntity(ContentType(MediaTypes.`application/json`), result)
        ))
      }
    }
}
