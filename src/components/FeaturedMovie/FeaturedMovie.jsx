import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

import { StyledBoxFeaturedCardContainer, StyledCard, StyledCardContent, StyledCardMedia } from './styles';

const FeaturedMovie = ({ movie }) => {
	if (!movie) return null;

	return (
		<StyledBoxFeaturedCardContainer component={Link} to={`/movie/${movie.id}`}>
			<StyledCard>
				<StyledCardMedia
					media="picture"
					alt={movie?.title}
					image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
					title={movie?.title}
				/>
				<Box padding="20px">
					<StyledCardContent>
						<Typography variant="h5" gutterBottom>
							{movie?.title}
						</Typography>
						<Typography variant="body2">{movie?.overview}</Typography>
					</StyledCardContent>
					{/* <CardContent className={classes.CardContent} classes={classes.CardContentRoot}>
					<Typography variant="h5" gutterBottom>
						{movie?.title}
					</Typography>
					<Typography variant="body2">{movie?.overview}</Typography>
				</CardContent> */}
				</Box>
			</StyledCard>
			{/* <Box padding="20px"> */}
		</StyledBoxFeaturedCardContainer>
	);
};

export default FeaturedMovie;
