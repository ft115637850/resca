name := "resca"

version := "0.1"

scalaVersion := "2.12.1"
val akkaVersion = "2.4.17"
val akkaHttp_ver  = "10.0.6"
val scalaTest_ver = "3.0.1"
val json4s_ver		= "3.5.0"
val slf4j_ver     = "1.7.25"
fork in Test := true

libraryDependencies ++= Seq(
  "com.typesafe.akka" %% "akka-slf4j" % akkaVersion,
  "com.typesafe.akka" %% "akka-http" % akkaHttp_ver,
  "com.typesafe.akka" %% "akka-cluster" % akkaVersion,
  "com.typesafe.akka" %% "akka-cluster-tools" % akkaVersion,
  "com.typesafe.akka" %% "akka-persistence" % akkaVersion,
  "com.typesafe.akka" %% "akka-testkit" % akkaVersion % "test",
  "io.jsonwebtoken" % "jjwt" % "0.7.0",
  "javax.xml.bind" % "jaxb-api" % "2.1",
  "ch.megard" %% "akka-http-cors" % "0.1.11",
  "org.iq80.leveldb" % "leveldb" % "0.7",
  "org.fusesource.leveldbjni" % "leveldbjni-all" % "1.8",
  "org.scalatest" %% "scalatest" % scalaTest_ver % "test",
  "org.slf4j" %  "slf4j-api" % slf4j_ver,
  "org.slf4j" %  "log4j-over-slf4j" % slf4j_ver,
  "ch.qos.logback" % "logback-classic" % "1.1.2",
  "ch.qos.logback.contrib" % "logback-json-classic" % "0.1.2",
  "ch.qos.logback.contrib" % "logback-jackson" % "0.1.2",
  "org.json4s" %% "json4s-native" % json4s_ver,
  "org.json4s" %% "json4s-jackson" % json4s_ver,
  "org.json4s" %% "json4s-ext" % json4s_ver,
  "commons-io" % "commons-io" % "2.4" % "test")

enablePlugins(JavaServerAppPackaging, DebianPlugin, UpstartPlugin)