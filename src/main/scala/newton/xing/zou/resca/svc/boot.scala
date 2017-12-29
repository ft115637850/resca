package newton.xing.zou.resca.svc
import akka.stream.ActorMaterializer
import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.server.{RejectionHandler, ExceptionHandler}
import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.model.HttpMethods._
import akka.http.scaladsl.model.headers.{HttpOrigin, HttpOriginRange}
import akka.http.scaladsl.server.Directives._
import ch.megard.akka.http.cors.CorsDirectives._
import ch.megard.akka.http.cors.CorsSettings
import newton.xing.zou.resca.svc.svcv0.{AssetSvc, LoginSvc}
import scala.collection.immutable

object boot extends App {
  implicit lazy val system = ActorSystem("resca-akka-http", mainSys)
  /**
    * Ensure that the constructed ActorSystem is shut down when the JVM shuts down
    */
  sys.addShutdownHook({
    system.terminate()
    ()
  })

  implicit val materializer = ActorMaterializer()
  val hostName = rescaConf.getString("api.interface")
  val webPort = rescaConf.getInt("api.port")
  val settings = CorsSettings.defaultSettings.copy(
    allowedOrigins = HttpOriginRange(
      HttpOrigin("http://localhost:7443"),
      HttpOrigin("http://127.0.0.1:7443"),
      HttpOrigin("http://localhost:3000")
    ),
    allowedMethods = immutable.Seq(GET, POST, HEAD, OPTIONS, PUT)
  )
  val rejectionHandler = corsRejectionHandler withFallback RejectionHandler.default

  val exceptionHandler = ExceptionHandler {
    case e: NoSuchElementException => complete(StatusCodes.NotFound -> e.getMessage)
  }

  val handleErrors = handleRejections(rejectionHandler) & handleExceptions(exceptionHandler)

  val route = handleRejections(corsRejectionHandler) {
    cors(settings)(
      handleErrors {
        new AssetSvc().route ~ new LoginSvc().route
      }
    )
  }

  val bindingFuture = Http().bindAndHandle(route, hostName, webPort)
  println(s"Server online at http://$hostName:$webPort/\n")
}
