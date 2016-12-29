const expect = require('code').expect;
const Chance = require('chance');
const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe('logger', () => {
    const chance = new Chance();
    const sandbox = sinon.sandbox.create();

    let logger,
        logLevel;

    beforeEach(() => {
        const getStub = sandbox.stub();

        logLevel = chance.string();
        getStub.withArgs('logLevel').returns(logLevel);

        logger = proxyquire('../../src/logger', {
            'config': {
                'get': getStub
            }
        });
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should set log level according to config value', () => {
        expect(logger.level).equals(logLevel);
    });
});
