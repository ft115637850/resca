# Resca
[![Build Status](https://travis-ci.org/ft115637850/resca.svg?branch=master)](https://travis-ci.org/ft115637850/resca)

Resca is a boilerplate for Reactjs + Akka.
It also shows best practices of
* How to validate JWT in akka-http.
* How to integrate redux, react-router into react.
* How to utilize swagger-codegen and yaml to generate api-client.
* How to implement websocket in react and akka-http.

## Demo
* https://resca-portal.herokuapp.com/

## How to run
#### Prerequisites

* JDK 8+
* Scala 2.12+
* SBT 1.0+
* Nodejs 6+

#### Clone source code
```sh
git clone https://github.com/ft115637850/resca.git

cd resca
```
---

#### Start resca back-end server
```sh
$ sbt "run-main newton.xing.zou.resca.svc.boot -port 7443"
```

#### Start resca front-end server
```sh
$ cd resca\webapp
$ npm install
$ npm start
```

#### Open browser and access web port 3000
> http://localhost:3000

> www/p4ssw0rd
