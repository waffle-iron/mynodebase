var assert = require('assert');
var request = require('request');
var httpUtils = require('request-mocha')(request);

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('A server receiving a request', function () {
//  before(startServer);

  // Make request and save results to `this.err`, `this.res`, and `this.body`
  httpUtils.save('http://localhost:8000/hello');

  // Assert against mocha's `this` context
  it('responded with "Hello World!"', function () {
    assert.equal(this.err, null);
    assert.equal(this.res.statusCode, 200);
    assert.equal(this.body,  "Hello World!");
//    expect(this.err).to.equal(null);
//    expect(this.res.statusCode).to.equal(200);
//    expect(this.body).to.equal('Hello World!');
  });
});
