package newton.xing.zou.resca.svc.svcv0
import newton.xing.zou.resca.svc.JWT
import akka.http.scaladsl.model.{ContentType, HttpEntity, HttpResponse, MediaTypes}
import akka.http.scaladsl.server.Directives
import akka.http.scaladsl.server.directives.Credentials

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
                       |      "status": "busy",
                       |      "avatar": "ok-128.jpg"
                       |    },
                       |    {
                       |      "id": "Alex",
                       |      "name": "Alex",
                       |      "gender": "male",
                       |      "status": "idle",
                       |      "avatar": "chexee-128.jpg"
                       |    },
                       |    {
                       |      "id": "Carl",
                       |      "name": "Carl",
                       |      "gender": "male",
                       |      "status": "busy",
                       |      "avatar": "kerem-128.jpg"
                       |    },
                       |    {
                       |      "id": "Steven",
                       |      "name": "Steven",
                       |      "gender": "male",
                       |      "status": "idle",
                       |      "avatar": "kolage-128.jpg"
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
