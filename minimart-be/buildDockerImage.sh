#!/bin/sh

docker_name="minimart-be:0.0.1"

mvn clean install

docker build --build-arg VERSION=0.0.1 -t ${docker_name} .
