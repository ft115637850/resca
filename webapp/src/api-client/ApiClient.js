
import superagent from 'superagent';
let regionResolvers = [];
export default class ApiClient {
	getJsonP(jsUrl, regionName, timeout) {
		return new Promise((resolve, reject) => {
			regionResolvers[regionName] = resolve;
			if (window.latency === undefined) {
				window.latency = {
					_pingCallback: region => regionResolvers[region](region)
				};
			}
			let jsonp = require('superagent-jsonp');
			superagent.get(jsUrl).use(jsonp).end(() => {});
			setTimeout(reject, timeout, regionName);
		});
	}
}
