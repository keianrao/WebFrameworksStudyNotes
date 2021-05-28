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
  
	test('visiting /about', async function (assert) {
		await visit('/about');
		assert.equal(currentURL(), '/about');
		assert.dom('h2').hasText('About Super Rentals');
		assert.dom('.jumbo a.button').hasText('Contact Us');
		await click('.jumbo a.button');
		// I should have noticed before that, click also targets by
		// CSS selector, rather than asking to be passed an object?
		assert.equal(currentURL(), '/getting-in-touch');
	});
  
  	test('visiting /getting-in-touch', async function (assert) {
		await visit('/getting-in-touch');		
		assert.equal(currentURL(), '/getting-in-touch');
		assert.dom('h2').hasText('Contact Us');
		assert.dom('.jumbo a.button').hasText('About Us');
		await click('.jumbo a.button');
		assert.equal(currentURL(), '/about');
	});
	
	// And are we to test the rental entries later, under this style?
	// These are presence checks of static elements.
});
