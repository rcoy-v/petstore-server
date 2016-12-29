const expect = require('code').expect;
const homeRoute = require('../../../src/routes/home');
const routes = require('../../../src/routes');

describe('routes index', () => {
    it('should export the home route(s)', () => {
        expect(routes).includes(homeRoute);
    });
});
