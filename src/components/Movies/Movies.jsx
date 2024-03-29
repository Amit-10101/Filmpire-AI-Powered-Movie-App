import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';

import { useGetMoviesQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MovieList';
import Pagination from '../Pagination/Pagination';
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie';

const Movies = () => {
	const [page, setPage] = useState(1);
	const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));

	const numberOfMovies = lg ? 17 : 19;

	const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);

	const { data, error, isFetching } = useGetMoviesQuery({
		genreIdOrCategoryName,
		page,
		searchQuery,
	});

	if (isFetching) {
		return (
			<Box display="flex" justifyContent="center">
				<CircularProgress size="4rem" />
			</Box>
		);
	}

	if (!data.results.length) {
		return (
			<Box display="flex" alignItems="center" mt="10px">
				<Typography variant="h4">
					No movies that match that name.
					<br />
					Please search for something else.
				</Typography>
			</Box>
		);
	}

	if (error) return 'An error has occured.';

	return (
		<div>
			<FeaturedMovie movie={data?.results[0]} />
			<MovieList movies={data} numberOfMovies={numberOfMovies} excludeFirst />
			<Pagination currentPage={page} setPage={setPage} totalPages={data.totalPages} />
		</div>
	);
};

export default Movies;
