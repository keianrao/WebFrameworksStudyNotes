import Component from '@glimmer/component';

import { default as esriMap } from '@arcgis/core/Map.js';
import { default as esriMapView } from '@arcgis/core/views/MapView.js';

export default class MapComponent extends Component {
	constructor(...args) {
		super(...args);
		
		this.map = new esriMap({
			basemap: "topo-vector",
			layers: null
		});
		
		this.mapView = new esriMapView({
			map: this.map,
			container: "map",
			// This part is where it fails. It demands a DOM element's ID,
			// but Ember doesn't really provide components with unique IDs.
			// And so far, it does seem like ArcGIS's MapView class doesn't
			// like having multiple instances. Earlier it even crashed
			// my desktop environment because somehow its height ended
			// up being infinitely big.
			//
			// I have no choice but to follow the tutorial in registering
			// for an online map service that supports image outputs.
			// A friend of mine had used Yahoo! Japan's once, but that
			// requires registration too so.
			//
			// For an app of this scale I'd prefer just preparing an image
			// alongside each of the rentals' data. For an app of a larger
			// scale I'd expect use of a database, which can be the one
			// connected to a mapper service then serving us images.
			// Or as a last resort, I'd use a library that browses a local
			// map database, to avoid the need for an API key.
			//
			// But if the frontend demands we use an online service then,
			// I guess I should be learning that. There will probably be
			// more coming that way.
			center: [ 101.64641, 3.08713 ],
			zoom: 10
		});
	}
}
