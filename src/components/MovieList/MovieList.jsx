import React from 'react';
// import { Grid } from '@mui/material';

import { StyledGrid } from './styles';
import Movie from '../Movie/Movie';

const MovieList = ({ movies, numberOfMovies, excludeFirst }) => {
	const startFrom = excludeFirst ? 1 : 0;

	return (
		<StyledGrid container>
			{movies.results.slice(startFrom, numberOfMovies).map((movie, index) => (
				<Movie key={index} movie={movie} index={index} />
			))}
		</StyledGrid>
	);
};

export default MovieList;
