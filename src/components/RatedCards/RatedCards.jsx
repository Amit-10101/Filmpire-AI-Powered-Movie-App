import React from 'react';
import { Typography, Box } from '@mui/material';

import Movie from '../Movie/Movie';
import { StyledBoxContainer } from './style';

const RatedCards = ({ title, data }) => (
	<Box marginBottom="2rem">
		<Typography variant="h5" gutterBottom>
			{title}
		</Typography>
		{!data?.results.length ? (
			<Typography margin="1rem 0" variant="subtitle1">
				{title === 'Watchlist'
					? 'Watchlist some movies to see them here!'
					: 'Favorite movies to see them here!'}
			</Typography>
		) : (
			<StyledBoxContainer display="flex" flexWrap="wrap">
				{data?.results.map((movie, index) => (
					<Movie key={movie.id} movie={movie} index={index} />
				))}
			</StyledBoxContainer>
		)}
	</Box>
);

export default RatedCards;
