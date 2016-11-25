#!/bin/bash
docker run -v /$(pwd):/usr/src/petstore-server petstore-server npm $@
