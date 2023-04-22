#!/bin/bash

function build()
{
  local docker_name=minimart-ui:0.0.1

  echo "Deleting old image"
  docker rmi ${docker_name}

  echo "Building"
  docker build -t ${docker_name} .

  echo "OK"
  echo ${docker_name}

}

build $@