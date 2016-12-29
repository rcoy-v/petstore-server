const expect = require('code').expect;
const proxyquire = require('proxyquire');
const sinon = require('sinon');

describe('server', () => {
    let sandbox,
        connectionMock,
        routeMock,
        allRoutes,
        startMock;

    function ServerStub() {
        this.connection = connectionMock;
        this.route = routeMock;
        this.start = startMock;
        this.info = {
            uri: ''
        };
    }

    beforeEach(() => {
        sandbox = sinon.sandbox.create();

        connectionMock = sandbox.mock();
        routeMock = sandbox.mock();
        startMock = sandbox.mock();

        allRoutes = [];

        proxyquire('../../src/server', {
            './routes': allRoutes,
            'hapi': {
                'Server': ServerStub
            }
        });
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('connection', () => {
        let firstCall,
            connectionArgs;

        beforeEach(() => {
            firstCall = connectionMock.args[0];
            connectionArgs = firstCall[0];
        });

        it('should be configured once', () => {
            sinon.assert.calledOnce(connectionMock);
        });

        it('should listen on all interfaces', () => {
            expect(connectionArgs.host).equals('0.0.0.0');
        });

        it('should listen on port 8000', () => {
            const expectedPort = 8000;

            expect(connectionArgs.port).equals(expectedPort);
        });
    });

    describe('routes', () => {
        it('should add all routes from directory', () => {
            const firstCall = routeMock.args[0];
            const givenRoutes = firstCall[0];

            expect(givenRoutes).equals(allRoutes);
        });
    });

    describe('start', () => {
        let firstCall,
            startCallback;

        beforeEach(() => {
            firstCall = startMock.args[0];
            startCallback = firstCall[0];
        });

        it('should be started once', () => {
            sinon.assert.calledOnce(startMock);
        });

        it('should throw an error if one has occurred during startup', () => {
            const expectedErrorMessage = 'expected error';
            const expectedError = Error(expectedErrorMessage);

            expect(startCallback.bind(this, expectedError)).throws(Error, expectedErrorMessage);
        });

        it('should not throw an error if none have occurred', () => {
            expect(startCallback).not.to.throw();
        });
    });
});
