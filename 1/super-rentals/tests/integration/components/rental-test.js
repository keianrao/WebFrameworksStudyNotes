import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental', function(hooks) {
  setupRenderingTest(hooks);

  test('renders information about a rental property', async function(assert) {
  	await render(hbs`<Rental />`);
	
	assert.dom('article').hasClass('rental');
	assert.dom('article h3').hasText('Grand Old Mansion');
	/*
	Later we will have to construct a Rental with an object, then see that
	the text contents match. I wonder how that's going to look like..
	*/
	
	assert.dom('article .detail.owner').includesText('Veruca Salt');
	assert.dom('article .detail.type').includesText('Standalone');
	assert.dom('article .detail.location').includesText('San Francisco');
	assert.dom('article .detail.bedrooms').includesText('15');
	// includesText introduces a way to defeat these tests.
	assert.dom('article .image');
	assert.dom('article .map');
  });
});
