'use strict';

const murmuration = require('../murmuration');

const migrate = require('./bin/migrate');

const { database, transaction } = murmuration;

module.exports = {
  migrate,
  database,
  transaction
};
