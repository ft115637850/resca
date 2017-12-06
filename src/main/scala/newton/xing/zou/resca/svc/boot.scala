package newton.xing.zou.resca.svc
import com.typesafe.config.{ Config, ConfigFactory }
import akka.stream.ActorMaterializer
import akka.actor.ActorSystem
import akka.http.scaladsl.Http

object boot extends App {
  val mainSys: Config = ConfigFactory.load().getConfig("mainSys")
  implicit lazy val system = ActorSystem("resca-akka-http", mainSys)
  /**
    * Ensure that the constructed ActorSystem is shut down when the JVM shuts down
    */
  sys.addShutdownHook({
    system.terminate()
    ()
  })

  implicit val materializer = ActorMaterializer()
  val rescaConf: Config = ConfigFactory.load().getConfig("resca")
  val hostName = rescaConf.getString("resca.api.interface")
  val webPort = rescaConf.getInt("resca.api.port")
  val route = new Directives()
  val bindingFuture = Http().bindAndHandle(route, hostName, webPort)
  println(s"Server online at https://$hostName:$webPort/\n")
}
