package newton.xing.zou.resca.svc
import com.typesafe.config.{Config, ConfigFactory}
import akka.stream.ActorMaterializer
import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.server.Directives._
import newton.xing.zou.resca.svc.routes.{AssetSvc, LoginSvc}

object boot extends App {
  val mainSys: Config = ConfigFactory.load("application.conf").getConfig("mainSys")
  implicit lazy val system = ActorSystem("resca-akka-http", mainSys)
  /**
    * Ensure that the constructed ActorSystem is shut down when the JVM shuts down
    */
  sys.addShutdownHook({
    system.terminate()
    ()
  })

  implicit val materializer = ActorMaterializer()
  val rescaConf: Config = ConfigFactory.load("resca.conf").getConfig("resca")
  val hostName = rescaConf.getString("api.interface")
  val webPort = rescaConf.getInt("api.port")
  val route = new AssetSvc().route ~ new LoginSvc().route

  val bindingFuture = Http().bindAndHandle(route, hostName, webPort)
  println(s"Server online at http://$hostName:$webPort/\n")
}
