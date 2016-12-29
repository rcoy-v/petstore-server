'use strict';

const winston = require('winston');
const config = require('config');

winston.level = config.get('logLevel');

module.exports = winston;
