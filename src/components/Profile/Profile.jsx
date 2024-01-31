import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Button, Box, useMediaQuery } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

import { userSelector } from '../../features/auth';
import { useGetListQuery } from '../../services/TMDB.js';
import RatedCards from '../RatedCards/RatedCards.jsx';

const Profile = () => {
	// Method 1: Getting from state of Redux
	// const { user } = useSelector((state) => state.user);

	// Method 2: Directly using the userSelector exported from the ../../features/auth.js
	const { user } = useSelector(userSelector);

	const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({
		listName: 'favorite/movies',
		accountId: user.id,
		sessionId: localStorage.getItem('session_id'),
		page: 1,
	});
	const { data: watchlistMovies, refetch: refetchWatchlisted } = useGetListQuery({
		listName: 'watchlist/movies',
		accountId: user.id,
		sessionId: localStorage.getItem('session_id'),
		page: 1,
	});

	useEffect(() => {
		refetchFavorites();
		refetchWatchlisted();
	}, []);

	const logout = () => {
		localStorage.clear();

		window.location.href = '/';
	};

	const sm = useMediaQuery((theme) => theme.breakpoints.only('sm'));

	return (
		// Check after finishing
		<Box>
			<Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="2em">
				<Typography variant="h4">Profile</Typography>
				<Button color="inherit" onClick={logout}>
					Logout &nbsp; <ExitToApp />
				</Button>
			</Box>
			{/* Profile Info */}
			<Box
				margin=" 1rem 1rem 3rem"
				display="flex"
				alignItems="center"
				sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
			>
				<img
					src={`https://media.themoviedb.org/t/p/w150_and_h150_face${user?.avatar?.tmdb?.avatar_path}`}
					style={{ borderRadius: '50%' }}
				/>
				<Box sx={{ margin: { xs: '2em 0 0', sm: '0 4em' } }}>
					<Typography
						sx={{
							display: 'flex',
							fontSize: '1.25em',
							color: (theme) => (theme.palette.mode === 'light' ? '#303030' : '#e0e0e0'),
						}}
						gutterBottom
					>
						<strong>Name:</strong> &nbsp;&nbsp;
						{user.name}
					</Typography>
					<Typography
						sx={{
							display: 'flex',
							fontSize: '1.25em',
							color: (theme) => (theme.palette.mode === 'light' ? '#303030' : '#e0e0e0'),
						}}
						gutterBottom
					>
						<strong>Username:</strong> &nbsp;&nbsp;
						{user.username}
					</Typography>
					<Typography
						sx={{
							display: 'flex',
							fontSize: '1.25em',
							color: (theme) => (theme.palette.mode === 'light' ? '#303030' : '#e0e0e0'),
						}}
						gutterBottom
					>
						<strong>User ID:</strong> &nbsp;&nbsp;
						{user.id}
					</Typography>
				</Box>
			</Box>

			{/* Favorite & Watchlist */}
			{!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
				<Typography variant="h5">Add favorites or watchlist some movies to see them here!</Typography>
			) : (
				<Box>
					<RatedCards title="Favorite Movies" data={favoriteMovies} />
					<RatedCards title="Watchlist" data={watchlistMovies} />
				</Box>
			)}
		</Box>
	);
};

export default Profile;
