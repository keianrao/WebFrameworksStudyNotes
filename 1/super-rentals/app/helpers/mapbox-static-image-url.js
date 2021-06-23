import { helper } from '@ember/component/helper';

import ENV from 'super-rentals/config/environment';
// (1) Is our import root the parent directory of our project..?
// (2) Can't we import something specific from ENV, rather than..

function mapboxStaticImageUrl([lng, lat, zoom, width, height]) {
	if (lng == undefined) return "";
	if (lat == undefined) return "";
	if (zoom == undefined) return "";
	if (width == undefined) return "";
	if (height == undefined) return "";
	
	return "https://api.mapbox.com/styles/v1"
		+ "/mapbox/streets-v11/static"
		+ "/" + lng + "," + lat + "," + zoom
		+ "/" + width + "x" + height + "@2x"
		+ "?access_token=" + encodeURIComponent(ENV.MAPBOX_TOKEN);
};

export default helper(mapboxStaticImageUrl);
