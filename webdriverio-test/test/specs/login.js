const assert = require('assert');
const config = require('../../config.js');

const authenticate = () => {
  browser
    .url(config.url)
    .click('button.dropdown')
};

describe('Logging in', () => {

  // Should fail when auth is implemented
  it('should redirect as if authenticated', () => {
    // Dummy assertion for now
    const text = browser
      .url(config.url)
      .getText('.navbar-brand=Logo');
    assert.equal(text, 'Logo');
  });
});

module.exports authenticate;
