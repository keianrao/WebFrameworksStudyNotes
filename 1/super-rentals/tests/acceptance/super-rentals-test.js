import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /super-rentals', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
	assert.dom('h2').hasText('Welcome to Super Rentals!');
	assert.dom('.jumbo a.button').hasText('About Us');
	// assert.dom will assert fail if element not found.
	await click('.jumbo a.button');
	assert.equal(currentURL(), '/about');
	
	// These don't strke me as particularly good test code..
  });
});
