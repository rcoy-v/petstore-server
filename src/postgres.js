'use strict';

const pg = require('pg');
const logger = require('./logger');

module.exports = () => {
    return new Promise((resolve, reject) => {
        pg.connect('postgres://postgres:petstore@database:5432/postgres', (connErr, client, done) => {
            if (connErr) {
                done();
                logger.error(connErr);
                reject(connErr);
            } else {
                const results = [];
                const query = client.query([
                    'SELECT bar',
                    'FROM foo',
                    'WHERE id = 1;'
                ].join(' '));

                query.on('err', (queryErr) => {
                    done();
                    reject(queryErr);
                });

                query.on('row', (row) => {
                    results.push(row);
                });

                query.on('end', () => {
                    done();
                    resolve(results[0].bar);
                });
            }
        });
    });
};
