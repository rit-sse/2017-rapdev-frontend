const assert = require('assert');
const config = require('../../config.js');

describe('The landing page', () => {
  it('should have a navbar', () => {
    // Dummy assertion for now
    const text = browser
      .url(config.url)
      .getText('.navbar-brand=Logo');
    assert.equal(text, 'Logo');
  });
});

