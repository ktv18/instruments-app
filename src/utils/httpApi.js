const ACCEPT = 'application/json';
const CONTENT_TYPE = 'application/json';
const DEFAULT_HEADERS = {
	Accept: ACCEPT,
	'Content-Type': CONTENT_TYPE,
};

const httpApi = {

	get (url, customHeaders = {}) {
		return fetch(url, {
			method: 'GET',
			headers: {
				...DEFAULT_HEADERS,
				...customHeaders,
			},
		});
	},

	post (url, body, customHeaders = {}) {
		return fetch(url, {
			method: 'POST',
			headers: {
				...DEFAULT_HEADERS,
				...customHeaders,
			},
			body: JSON.stringify(body),
		});
	},

	// TODO: Add more methods.
};

export default httpApi;
