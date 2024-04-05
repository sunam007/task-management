#!/usr/bin/env bash

echo 'Setting up api...'

cd backend

npm install

cd ../frontend

npm install

echo 'Setup done. To run all projects at once: npm run start'
