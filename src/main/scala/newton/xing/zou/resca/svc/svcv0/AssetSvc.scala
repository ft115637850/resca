package newton.xing.zou.resca.svc.svcv0

import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server.Directives

class AssetSvc extends Directives {
  val route = get {
    pathSingleSlash {
      redirect("resca/", StatusCodes.PermanentRedirect)
    } ~ path("resca") {
      redirect("resca/", StatusCodes.PermanentRedirect)
    } ~ path("resca" / "") {
      getFromFile("webapp/build/index.html")
    } ~ pathPrefix("resca") {
      getFromResourceDirectory("webapp/build")
    }
  }
}
