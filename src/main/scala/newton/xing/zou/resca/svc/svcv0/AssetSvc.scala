package newton.xing.zou.resca.svc.svcv0

import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server.Directives

class AssetSvc extends Directives {
  val route = get {
    pathSingleSlash {
      redirect("index/", StatusCodes.PermanentRedirect)
    } ~ path("index") {
      redirect("index/", StatusCodes.PermanentRedirect)
    } ~ path("index" / "") {
      getFromFile("webapp/build/index.html")
    } ~ pathPrefix("index") {
      getFromResourceDirectory("webapp/build")
    }
  }
}
