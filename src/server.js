'use strict';

const Hapi = require('hapi');
const graphql = require('graphql').graphql;
const rootSchema = require('./graphql-schema');
const logger = require('./logger');

const server = new Hapi.Server();

server.connection({
    host: '0.0.0.0',
    port: 8000
});

server.route({
    handler: (request, reply) => {
        return reply(graphql(rootSchema, '{hello}'));
    },
    method: 'GET',
    path: '/'
});

server.start((error) => {
    if (error) {
        throw error;
    }

    logger.info(`Server running at: http://localhost:${server.info.port}`);
});
