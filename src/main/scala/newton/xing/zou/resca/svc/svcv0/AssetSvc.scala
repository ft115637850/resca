package newton.xing.zou.resca.svc.svcv0

import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server.Directives

class AssetSvc extends Directives {
  val route = get {
    pathSingleSlash {
      redirect("chat/", StatusCodes.PermanentRedirect)
    } ~ path("chat") {
      redirect("chat/", StatusCodes.PermanentRedirect)
    } ~ path("chat" / "") {
      getFromFile("webapp/build/index.html")
    } ~ pathPrefix("chat") {
      getFromResourceDirectory("webapp/build")
    }
  }
}
