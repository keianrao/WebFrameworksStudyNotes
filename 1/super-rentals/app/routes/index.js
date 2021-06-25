import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = [ 'Condo', 'Townhouse', 'Apartment' ];

export default class IndexRoute extends Route {
	async model() {
		var response = await fetch('/api/rentals.json');
		
		var { data } = await response.json();
		// What on earth..? Using fetch is that terse?
		// Also, what happens if the promise fails?
		
		return data.map(function (model) {
			var { attributes } = model;
			// (Ignoring 'type' and 'id')
			
			var hasCommunityCategory = 
				COMMUNITY_CATEGORIES.includes(attributes.category);
			/*
			var type = hasCommunityCategory ? 'Community' : 'Standalone';
			// Wasn't in our data, so we have to determine it ourselves.
			
			return { type, ...attributes };
			// Merge 'type' into rest of attributes.
			/*/
			attributes.type =
				hasCommunityCategory ? 'Community' : 'Standalone';
				
			return attributes;
			//*/
		});
	}
}
