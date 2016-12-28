'use strict';

const GraphQLSchema = require('graphql').GraphQLSchema;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLObjectType = require('graphql').GraphQLObjectType;
const db = require('./postgres');

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        fields: {
            hello: {
                resolve: () => {
                    return db();
                },
                type: GraphQLString
            }
        },
        name: 'RootQueryType'
    })
});
