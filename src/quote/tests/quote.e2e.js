'use strict';
 
var assert = require('assert');

Feature('Random quotes');

Scenario('I have a button to change the quote', (I) => {
  I.amOnPage('/');
  I.waitForText('Another quote!');
});

Scenario('I find test', (I) => {
  I.amOnPage('/');
  I.waitForText('Test');
});

Scenario('I can change the quote', function*(I) {
  I.amOnPage('/');
  I.waitForText('Another quote!');
  const quote1 = yield I.grabTextFrom('.quote');
  I.click('Another quote!');
  const quote2 = yield I.grabTextFrom('.quote');
  assert.notEqual(quote1, quote2);
});

Scenario('I never have the same quote when changing the quote', function*(I) {	
  I.amOnPage('/');
  
  for(let i = 0; i < 30; i++) {
	I.waitForText('Another quote!');
	const quote1 = yield I.grabTextFrom('.quote');
	I.click('Another quote!');
	const quote2 = yield I.grabTextFrom('.quote');
	assert.notEqual(quote1, quote2);  
  }
});