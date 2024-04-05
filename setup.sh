#!/usr/bin/env bash

echo 'Setting up ...'

npm install

cd backend

cp .env.example .env

npm install

cd ../frontend

cp .env.example .env

npm install

echo 'Setup done. To run all projects at once: npm run start'
