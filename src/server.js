'use strict';

const Hapi = require('hapi');
const graphql = require('graphql').graphql;
const rootScema = require('./graphql-schema');

const server = new Hapi.Server();

server.connection({
    host: '0.0.0.0',
    port: 8000
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply(graphql(rootScema, '{hello}').then((result) => {
            return result;
        }));
    }
});

server.start((error) => {
    if (error) {
        throw error
    }

    console.log(`Server running at: ${server.info.uri}`)
});
