#!/usr/bin/env bash

docker run \
   -p 80:3000 \
   -v $(pwd)/.:/frontend \
   --rm -it -d \
   node:12.16.2-slim

