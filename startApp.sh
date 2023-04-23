#!/bin/bash

echo ---------- start postgres ----------
cd minimart-db
docker-compose up -d &
sleep 10

echo ---------- start ui ----------
cd ../minimart-ui
docker-compose up -d &
sleep 5

echo ---------- start be ----------
cd ../minimart-be
docker-compose up -d &

cd ..

