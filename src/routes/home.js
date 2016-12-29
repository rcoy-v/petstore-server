'use strict';

const graphql = require('graphql').graphql;
const rootSchema = require('../graphql-schema');

module.exports = {
    handler: (request, reply) => {
        return reply(graphql(rootSchema, '{hello}'));
    },
    method: 'GET',
    path: '/'
};
