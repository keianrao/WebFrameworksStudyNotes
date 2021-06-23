import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import ENV from 'super-rentals/config/environment';

module('Integration | Helper | mapbox-static-image-url', function(hooks) {
  setupRenderingTest(hooks);

  test('it builds a URL given adequate parameters', async function(assert) {
	await render(hbs`{{mapbox-static-image-url
		1.0000
	}}`);
	assert.equal(this.element.textContent.trim(), "");
	
	await render(hbs`
		{{mapbox-static-image-url
			1.0000 2.0000
		}}
	`);
	assert.equal(this.element.textContent.trim(), "");
	
	await render(hbs`
		{{mapbox-static-image-url
			1.0000 2.0000 10
		}}
	`);
	assert.equal(this.element.textContent.trim(), "");
	
	await render(hbs`
		{{mapbox-static-image-url
			1.0000 2.0000 10 512 340
		}}
	`);
	var result = this.element.textContent.trim();
	assert.ok(result.startsWith('https://api.mapbox.com'));
	assert.ok(result.includes('1,2,10'));
	assert.ok(result.includes('512x340@2x'));
	assert.ok(result.includes(
		'access_token='
		+ encodeURIComponent(ENV.MAPBOX_TOKEN)
	));
	
	await render(hbs`
		{{mapbox-static-image-url
			1.0000 2.0000 10
		}}
	`);
	assert.equal(this.element.textContent.trim(), "");
	
	// Apologies for the basicness of the tests.
  });
});
