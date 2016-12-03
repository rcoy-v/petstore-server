'use strict';

const GraphQLSchema = require('graphql').GraphQLSchema;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLObjectType = require('graphql').GraphQLObjectType;

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        fields: {
            hello: {
                resolve() {
                    return 'world';
                },
                type: GraphQLString
            }
        },
        name: 'RootQueryType'
    })
});
