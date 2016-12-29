const expect = require('code').expect;
const proxyquire = require('proxyquire');
const sinon = require('sinon');

describe('home route', () => {
    const sandbox = sinon.sandbox.create();

    let route,
        graphqlStub,
        graphqlSchemaStub;

    beforeEach(() => {
        graphqlStub = sandbox.stub();
        graphqlSchemaStub = {};

        route = proxyquire('../../../src/routes/home', {
            'graphql': {
                'graphql': graphqlStub
            },
            '../graphql-schema': graphqlSchemaStub
        });
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should handle requests to "/"', () => {
        expect(route.path).equals('/');
    });

    it('should handle GET requests', () => {
        expect(route.method).equals('GET');
    });

    it('should reply with a graphql response with the hello property from root schema', () => {
        const expectedReply = {};
        const replyMock = sandbox.mock();

        graphqlStub.withArgs(graphqlSchemaStub, '{hello}').returns(expectedReply);
        replyMock.once().withExactArgs(expectedReply);

        route.handler(sandbox.stub(), replyMock);

        replyMock.verify();
    });
});
