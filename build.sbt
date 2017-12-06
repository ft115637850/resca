name := "resca"

version := "0.1"

scalaVersion := "2.12.1"
val akkaVersion = "2.4.17"
val akkaHttp_ver  = "10.0.6"
val scalaTest_ver = "3.0.1"

fork in Test := true

libraryDependencies ++= Seq(
  "com.typesafe.akka" %% "akka-http" % akkaHttp_ver,
  "com.typesafe.akka" %% "akka-cluster" % akkaVersion,
  "com.typesafe.akka" %% "akka-cluster-tools" % akkaVersion,
  "com.typesafe.akka" %% "akka-persistence" % akkaVersion,
  "org.iq80.leveldb" % "leveldb" % "0.7",
  "org.fusesource.leveldbjni" % "leveldbjni-all" % "1.8",
  "com.typesafe.akka" %% "akka-testkit" % akkaVersion % "test",
  "org.scalatest" %% "scalatest" % scalaTest_ver % "test",
  "commons-io" % "commons-io" % "2.4" % "test")