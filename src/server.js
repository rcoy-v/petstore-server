'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
    host: '0.0.0.0',
    port: 8000
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        return reply('hello')
    }
});

server.start((error) => {
    if (error) {
        throw error
    }

    console.log(`Server running at: ${server.info.uri}`)
});
