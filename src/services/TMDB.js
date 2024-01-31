import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;

export const tmdbApi = createApi({
	reducerPath: 'tmdbApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.themoviedb.org/3/',
	}),
	endpoints: (builder) => ({
		// Get Movie Genres
		getGenres: builder.query({
			query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
		}),

		// Get Movies by [Type]
		getMovies: builder.query({
			query: ({ genreIdOrCategoryName, page, searchQuery }) => {
				// Get Movies by Category
				if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
					return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
				}

				// Get Movies by Genre
				if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
					return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
				}

				// Get Movies by Search
				if (searchQuery) {
					return `search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
				}

				// Get popular movies
				return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
			},
		}),

		// Get Movie by ID
		getMovie: builder.query({
			query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
		}),

		// Get User Specific List
		getRecommendations: builder.query({
			query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
		}),

		// Get List - Favorites & Watchlist
		getList: builder.query({
			query: ({ listName, accountId, sessionId, page }) =>
				`account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
		}),

		// Get Actor Information
		getActor: builder.query({
			// query: ({ actor_id, list }) => `person/${actor_id}/${list}?api_key=${tmdbApiKey}`,
			query: (actor_id) => `person/${actor_id}?api_key=${tmdbApiKey}`,
		}),

		// Get Actor's Movies Information
		getActorMovies: builder.query({
			// query: ({ actor_id, list }) => `person/${actor_id}/${list}?api_key=${tmdbApiKey}`,
			query: ({ actor_id, page }) =>
				`discover/movie?with_cast=${actor_id}&page=${page}&api_key=${tmdbApiKey}`,
		}),
	}),
});

export const {
	useGetGenresQuery,
	useGetMoviesQuery,
	useGetMovieQuery,
	useGetRecommendationsQuery,
	useGetActorQuery,
	useGetActorMoviesQuery,
	useGetListQuery,
} = tmdbApi;
