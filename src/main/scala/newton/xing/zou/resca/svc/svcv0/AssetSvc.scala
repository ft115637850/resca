package newton.xing.zou.resca.svc.svcv0

import akka.http.scaladsl.model._
import akka.http.scaladsl.server.Directives

class AssetSvc extends Directives {
  val route = options {
      val result = """{"result" : "ok"}""".stripMargin
      complete(HttpResponse(
        200,
        entity = HttpEntity(ContentType(MediaTypes.`application/json`), result)
      ))
    } ~ get {
      path("api" / "v0" / "ping") {
        val result = """{"result" : "pong pong pong"}""".stripMargin
        complete(HttpResponse(
          200,
          entity = HttpEntity(ContentType(MediaTypes.`application/json`), result)
        ))
      }
    }
}
