@ECHO off

call java -jar swagger-codegen-cli-2.3.0.jar generate -i ./api.yaml -l javascript -o ../webapp/src/api-client -c ./codegen.config

