import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | jumbo', function(hooks) {
  setupRenderingTest(hooks);

  test('renders content under header with tomster', async function(assert) {
  	let text = "A fifth of this world's population lives in the poles, where the old trees still remain.";
	let template = hbs`<Jumbo>A fifth of this world's population lives in the poles, where the old trees still remain.</Jumbo>`
	/*
	I searched for 15 minutes a way to insert the text variable into the
	compiled template. No go - placeholders not supported inside template
	literals (what engine is this test server running on..?), cannot
	call hbs as a function with string as argument, don't know how to
	import Ember.Handlebars.compile (assuming that exists).
	*/
  
  	// Apparently 'this' is now set to the component instance itself.
    await render(template);
	
	assert.dom('.jumbo');
	assert.dom('.jumbo').hasText(text);
	assert.dom('.jumbo .tomster').exists();
  });
});
