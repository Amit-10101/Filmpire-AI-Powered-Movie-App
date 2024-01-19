import React from 'react';
// import { Grid } from '@mui/material';

import { StyledGrid } from './styles';
import Movie from '../Movie/Movie';

const MovieList = ({ movies }) => (
	// console.log(movies);

	<StyledGrid container>
		{movies.results.map((movie, index) => (
			<Movie key={index} movie={movie} index={index} />
		))}
	</StyledGrid>
);
export default MovieList;
