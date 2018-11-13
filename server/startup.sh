#!/bin/bash
set -ex 
mongod > /mongo.log 2>&1 &
cd comments-module
npm run start > /comments.log 2>&1 &
