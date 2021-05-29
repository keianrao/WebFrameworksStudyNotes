import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function(hooks) {
	setupApplicationTest(hooks);

	test('visiting /super-rentals', async function(assert) {
		await visit('/');
		assert.equal(currentURL(), '/');
		
		assert.dom('nav');
		assert.dom('h1').hasText('SuperRentals');
		// Not even limiting it to a child of nav?
		
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
		
		assert.dom('nav');
		assert.dom('h1').hasText('SuperRentals');
		
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
		
		assert.dom('nav');
		assert.dom('h1').hasText('SuperRentals');
		
		assert.dom('h2').hasText('Contact Us');
		assert.dom('.jumbo a.button').hasText('About Us');
		
		await click('.jumbo a.button');
		assert.equal(currentURL(), '/about');
	});
	
	// And are we to test the rental entries later, under this style?
	// These are presence checks of static elements.
	
	test('navigating using the nav-bar', async function (assert) {
		await visit('/');
		
		assert.dom('nav');
		assert.dom('nav a.menu-index').hasText('SuperRentals');
		assert.dom('nav a.menu-about').hasText('About');
		assert.dom('nav a.menu-contact').hasText('Contact');
		// Truly, why are we checking strings when they are subject to
		// frequent change and localisation..? We should just be checking
		// for the existence and functions of those links.
		
		await click('nav a.menu-about');
		assert.equal(currentURL(), '/about');
		
		await click('nav a.menu-contact');
		assert.equal(currentURL(), '/getting-in-touch');
		// Can we also introspect what route we are in?
		// So that we do not depend on a URL.
		
		await click('nav a.menu-index');
		assert.equal(currentURL(), '/');
	});
});
