/*global describe, it */
'use strict';
var assert = require('assert');
var vip = require('./');

describe('validate-ip node module', function () {
  it('must validate correctly!!!', function () {
    assert(vip('255.255.255.255'));
    assert(!vip('255.255.255.255.'));
    assert(!vip('255.255.255.256'));
    assert(vip('0.0.0.0'));
    assert(!vip('0.0.0'));
  });
});
