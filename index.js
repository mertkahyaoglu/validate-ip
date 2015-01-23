'use strict';

module.exports = function (ip) {
  if (typeof ip !== 'string') {
    throw new TypeError('Expected a string');
  }

  var matcher = /^(?:(?:2[0-4]\d|25[0-5]|1\d{2}|[1-9]?\d)\.){3}(?:2[0-4]\d|25[0-5]|1\d{2}|[1-9]?\d)$/;

  return matcher.test(ip);
};
