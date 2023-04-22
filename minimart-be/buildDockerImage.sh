#!/bin/sh

docker_name="boatship/minimart-be:0.0.1"

mvn clean install

docker build --build-arg VERSION=0.0.1 -t ${docker_name} .

if [ "$1" = "yes" ]; then
    echo "Pushing to dockerhub"
   docker push ${docker_name}
fi
