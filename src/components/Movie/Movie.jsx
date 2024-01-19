import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
// import { Link } from 'react-router-dom';

import { StyledLink, StyledImage } from './styles';

const Movie = ({ movie, index }) => (
	// console.log(movie, index);

	<Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={{ padding: '10px' }}>
		<Grow in key={index} timeout={(index + 1) * 250}>
			<StyledLink to={`/movie/${movie.id}`}>
				<StyledImage
					alt={movie.title}
					src={
						movie.poster_path
							? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
							: 'https://www.fillmurray.com/200/300'
					}
				/>
				<Typography
					variant="h5"
					sx={(theme) => ({
						color: theme.palette.text.primary,
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						width: '230px',
						marginTop: '10px',
						marginBottom: '0',
						// marginLeft: '240px',
						textAlign: 'center',
					})}
				>
					{movie.title}
				</Typography>
				<Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
					<div>
						<Rating readOnly value={movie.vote_average / 2} precision={0.1} />
					</div>
				</Tooltip>
			</StyledLink>
		</Grow>
	</Grid>
);
export default Movie;
