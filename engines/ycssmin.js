'use strict';

var Engine = require('../engine');
module.exports = new Engine('ycssmin', require('ycssmin').cssmin);