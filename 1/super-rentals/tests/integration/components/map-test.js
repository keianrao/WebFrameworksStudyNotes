import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | map', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a map given parameters', async function(assert) {
    await render(hbs`<Map	
		@lat="37.7797"
		@lng="-122.4184"
		@zoom="10"
		@width="150" @height="120"
	/>`);
	assert
		.dom(".map img")
		.hasAttribute(
			'alt', 
			'Map of location. Coordinates are 37.7797,-122.4184'
		)
		.hasAttribute('src')
		.hasAttribute('width', '150')
		.hasAttribute('height', '120');
  });
  
  test('the default alt can be overriden', async function(assert) {
    await render(hbs`<Map	
		@lat="37.7797"
		@lng="-122.4184"
		@zoom="10"
		@width="150" @height="120"
		alt="A map of San Fran"
	/>`);
	assert
		.dom(".map img")
		.hasAttribute('alt', "A map of San Fran");
  });
  
  test('src cannot be overridden', async function(assert) {
    await render(hbs`<Map	
		@lat="37.7797"
		@lng="-122.4184"
		@zoom="10"
		@width="150" @height="120"
		src="somewhere"
	/>`);
	assert
		.dom(".map img")
		.hasAttribute('src', /^[^s][^o][^m][^e]/);
  });
  
  test('dimensions cannot be overridden', async function(assert) {
    await render(hbs`<Map	
		@lat="37.7797"
		@lng="-122.4184"
		@zoom="10"
		@width="150" @height="120"
		width="200" height="240"
	/>`);
	assert
		.dom(".map img")
		.hasAttribute('width', "150")
		.hasAttribute('height', "120");
  });
});
