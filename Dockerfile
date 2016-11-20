FROM node:6
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn
ARG SRC_DIR=/usr/src/petstore-server
RUN mkdir -p $SRC_DIR
VOLUME $SRC_DIR
WORKDIR $SRC_DIR
COPY package.json $SRC_DIR
RUN npm i
