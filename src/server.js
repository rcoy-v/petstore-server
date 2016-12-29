'use strict';

const Hapi = require('hapi');
const logger = require('./logger');
const routes = require('./routes');

const server = new Hapi.Server();

server.connection({
    host: '0.0.0.0',
    port: 8000
});

server.route(routes);

server.start((error) => {
    if (error) {
        throw error;
    }

    logger.info(`Server running at: http://localhost:${server.info.port}`);
});
