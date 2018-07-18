export const searchUrl = (url) => {
	var urlGen = url;
	if (url.search("_")>=0 && (/^\w+_/).test(url)) {
		if ((/fr_[\w]+[\d]+/).test(url)) {
			const fundaRoutes = require('./fundaRoutes').default;
			fundaRoutes.every((route) => {
				if ("fr_"+route._id === url) {
					urlGen = route.route;
					return false;
				}
				console.log(route);
				return true;
			});	
		}
	}
	return urlGen;
}