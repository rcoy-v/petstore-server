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
    handler: (request, reply) => {
        return reply(graphql(rootScema, '{hello}'));
    },
    method: 'GET',
    path: '/'
});

server.start((error) => {
    if (error) {
        throw error;
    }

    console.log(`Server running at: ${server.info.uri}`); // eslint-disable-line no-console
});
