package newton.xing.zou.resca
import java.util.Date

import com.typesafe.config.{Config, ConfigFactory}
import io.jsonwebtoken.{Jwts, SignatureAlgorithm}

import scala.collection.JavaConversions._

package object svc {
  val mainSys: Config = ConfigFactory.load("application.conf").getConfig("mainSys")
  val rescaConf: Config = ConfigFactory.load("resca.conf").getConfig("resca")
  val jwtSecret = rescaConf.getString("jwt.secret")
  val expireMs = 15 * 60 * 1000L

  def encodeJwt(payload: Map[String, Any], expireMs: Long = expireMs): String = {
    try {
      val jwtBuilder = Jwts.builder()
        .setHeaderParams(payload.asInstanceOf[Map[String, AnyRef]])
        .signWith(SignatureAlgorithm.HS512, jwtSecret)
      if (expireMs > 0) {
        jwtBuilder.setExpiration(new Date(System.currentTimeMillis() + expireMs))
      }
      jwtBuilder.compact()
    } catch {
      case e: Throwable =>
        ""
    }
  }

  def decodeJwt(jwtStr: String): Map[String, Any] = {
    try {
      Jwts.parser().setSigningKey(jwtSecret).parse(jwtStr).getHeader.entrySet().map { t => (t.getKey, t.getValue)}.toMap[String, Any]
    } catch {
      case e: Throwable =>
        Map[String, Any]()
    }
  }
}
