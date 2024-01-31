import axios from 'axios';

export const moviesApi = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: import.meta.env.VITE_TMDB_KEY,
	},
});

export const fetchToken = async () => {
	try {
		// Getting Data after destructring respose of await get call
		const { data } = await moviesApi.get('/authentication/token/new');

		const token = data.request_token;
		// console.log(token);

		if (data.success) {
			localStorage.setItem('request_token', token);
			// console.log(token);

			window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
		}
	} catch (error) {
		console.log('Sorry your token could not be created');
	}
};

export const createSessionId = async () => {
	const token = localStorage.getItem('request_token');

	if (token) {
		try {
			const {
				data: { session_id },
			} = await moviesApi.post('authentication/session/new', {
				request_token: token,
			});

			localStorage.setItem('session_id', session_id);

			return session_id;
		} catch (error) {
			console.log('Sorry, your session could not be created.');
			console.log(error);
		}
	}
};
