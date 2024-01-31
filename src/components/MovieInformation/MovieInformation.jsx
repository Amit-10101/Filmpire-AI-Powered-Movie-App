import React, { useState, useEffect } from 'react';
import {
	Modal,
	Typography,
	Button,
	ButtonGroup,
	Grid,
	Box,
	CircularProgress,
	useMediaQuery,
	Rating,
} from '@mui/material';
import {
	Movie as MovieIcon,
	Theaters,
	Language,
	PlusOne,
	Favorite,
	FavoriteBorderOutlined,
	Remove,
	ArrowBack,
	ExitToApp,
} from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { useGetListQuery, useGetMovieQuery, useGetRecommendationsQuery } from '../../services/TMDB.js';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory.js';
import {
	StyledGridSpaceAround,
	StyledPosterImg,
	StyledGridGenreContainer,
	StyledGenreImage,
	StyledGenreLink,
	StyledCastImage,
	StyledDivButtonContainer,
	StyledGridButtonContainer,
	StyledModal,
	Stylediframe,
} from './style';
import genreIcons from '../../assets/genres';
import MovieList from '../MovieList/MovieList.jsx';
import { userSelector } from '../../features/auth.js';

const MovieInformation = () => {
	const [open, setOpen] = useState(false);
	const [isMovieFavorited, setIsMovieFavorited] = useState(false);
	const [isMovieWatchlisted, setIsMovieWatchlisted] = useState(false);

	const { user } = useSelector(userSelector);
	const { id } = useParams();
	const dispatch = useDispatch();

	// Fetching Movies Data from Redux
	const { data, isFetching, error } = useGetMovieQuery(id);
	const { data: favoriteMovies } = useGetListQuery({
		listName: 'favorite/movies',
		accountId: user.id,
		sessionId: localStorage.getItem('session_id'),
		page: 1,
	});
	const { data: watchlistMovies } = useGetListQuery({
		listName: 'watchlist/movies',
		accountId: user.id,
		sessionId: localStorage.getItem('session_id'),
		page: 1,
	});
	const { data: recommendationsData, isFetching: isRecommendationsFetching } = useGetRecommendationsQuery({
		movie_id: id,
		list: '/recommendations',
	});

	useEffect(() => {
		setIsMovieFavorited(!!favoriteMovies?.results?.find((movie) => movie?.id === data?.id));
	}, [favoriteMovies, data]);
	useEffect(() => {
		setIsMovieWatchlisted(!!watchlistMovies?.results?.find((movie) => movie?.id === data?.id));
	}, [watchlistMovies, data]);

	const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;

	const addToFavorites = async () => {
		await axios.post(
			`https://api.themoviedb.org/3/account/${
				user.id
			}/favorite?api_key=${tmdbApiKey}&session_id=${localStorage.getItem('session_id')}`,
			{
				media_type: 'movie',
				media_id: id,
				favorite: !isMovieFavorited,
			}
		);

		setIsMovieFavorited((prev) => !prev);
	};

	const addToWatchlist = async () => {
		await axios.post(
			`https://api.themoviedb.org/3/account/${
				user.id
			}/watchlist?api_key=${tmdbApiKey}&session_id=${localStorage.getItem('session_id')}`,
			{
				media_type: 'movie',
				media_id: id,
				watchlist: !isMovieWatchlisted,
			}
		);

		setIsMovieWatchlisted((prev) => !prev);
	};

	if (isRecommendationsFetching) {
		return (
			<Box display="flex" justifyContent="center" alignItems="center">
				<CircularProgress size="8rem" />
			</Box>
		);
	}

	if (isFetching) {
		return (
			<Box display="flex" justifyContent="center" alignItems="center">
				<CircularProgress size="8rem" />
			</Box>
		);
	}

	if (error) {
		return (
			<Box display="flex" justifyContent="center" alignItems="center">
				<Link to="/">Something has gone wrong - Go Back</Link>
			</Box>
		);
	}

	return (
		<StyledGridSpaceAround container>
			<Grid display="flex" item sm={12} md={12} lg={4} sx={{ marginBottom: { md: '40px' } }}>
				<StyledPosterImg src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} alt={data?.title} />
			</Grid>
			<Grid item container direction="column" lg={7} sx={{ marginTop: { xl: '30px' } }}>
				{/* Title */}
				<Typography variant="h3" align="center" gutterBottom>
					{data?.title} ({data.release_date.split('-')[0]})
				</Typography>

				{/* Tagline */}
				<Typography variant="h5" align="center" gutterBottom>
					{data?.tagline}
				</Typography>

				{/* Rating, RunTime & Language */}
				<StyledGridSpaceAround item>
					<Box display="flex" alignItems="center">
						<Rating readOnly value={data.vote_average / 2} />
						<Typography variant="subtitle1" gutterBottom style={{ marginLeft: '10px' }}>
							{data?.vote_average.toString().slice(0, 3)} / 10
						</Typography>
					</Box>
					<Typography variant="h6" align="center" gutterBottom>
						{data?.runtime} min&nbsp; | &nbsp;Language: {data?.spoken_languages[0]?.name}
					</Typography>
				</StyledGridSpaceAround>

				{/* Genre List */}
				<StyledGridGenreContainer item>
					{data?.genres?.map((genre) => (
						<StyledGenreLink
							key={genre?.name}
							to="/"
							onClick={() => dispatch(selectGenreOrCategory(genre.id))}
						>
							<StyledGenreImage src={genreIcons[genre?.name.toLowerCase()]} height={30} />
							<Typography color="textPrimary" variant="subtitle1">
								{genre?.name}
							</Typography>
						</StyledGenreLink>
					))}
				</StyledGridGenreContainer>

				{/* Overview */}
				<Typography variant="h5" gutterBottom style={{ marginTop: '10px' }}>
					Overview
				</Typography>
				<Typography style={{ marginBottom: '2rem', textAlign: 'justify' }}>{data?.overview}</Typography>

				{/* Top Casting */}
				<Typography variant="h5" gutterBottom>
					Top Cast
				</Typography>
				<Grid item container spacing={2}>
					{data &&
						data.credits?.cast
							?.map(
								(character, index) =>
									character.profile_path && (
										<Grid
											key={index}
											item
											xs={4}
											md={2}
											component={Link}
											to={`/actors/${character.id}`}
											style={{ textDecoration: 'none' }}
										>
											<StyledCastImage
												src={`https://image.tmdb.org/t/p/w500/${character?.profile_path}`}
												alt={character?.name}
											/>
											<Typography color="textPrimary">{character?.name}</Typography>
											<Typography color="textSecondary">
												{character.character.split('/')[0]}
											</Typography>
										</Grid>
									)
							)
							.slice(0, 6)}
				</Grid>

				{/* Buttons */}
				<Grid item container style={{ marginTop: '2rem' }}>
					<StyledDivButtonContainer>
						<StyledGridButtonContainer item xs={12} md={6}>
							<ButtonGroup sx={{ width: '100%' }} size="medium" variant="outlined">
								<Button
									target="_blank"
									rel="noopener norefferer"
									href={data?.homepage}
									endIcon={<Language />}
								>
									WEBSITE
								</Button>
								<Button
									target="_blank"
									rel="noopener norefferer"
									href={`https://www.imdb.com/title/${data?.imdb_id}`}
									endIcon={<MovieIcon />}
								>
									IMDB
								</Button>
								<Button
									// target="_blank"
									// rel="noopener norefferer"
									onClick={() => setOpen(true)}
									href="#"
									endIcon={<Theaters />}
								>
									TRAILER
								</Button>
							</ButtonGroup>
						</StyledGridButtonContainer>
						<StyledGridButtonContainer item xs={12} md={6}>
							<ButtonGroup sx={{ width: '100%' }} size="medium" variant="outlined">
								<Button
									onClick={addToFavorites}
									endIcon={isMovieFavorited ? <FavoriteBorderOutlined /> : <Favorite />}
								>
									{isMovieFavorited ? 'UNFAVORITE' : 'FAVORITE'}
								</Button>
								<Button
									onClick={addToWatchlist}
									endIcon={isMovieWatchlisted ? <Remove /> : <PlusOne />}
								>
									{/* {isMovieWatchlisted
										? 'REMOVE FROM WATCHLIST'
										: 'ADD TO WATCHLIST'} */}
									WATCHLIST
								</Button>
								<Button endIcon={<ExitToApp />} sx={{ borderColor: 'primary.main' }}>
									<Typography
										component={Link}
										to="/"
										color="inherit"
										variant="subtitle2"
										style={{ textDecoration: 'none' }}
									>
										BACK
									</Typography>
								</Button>
							</ButtonGroup>
						</StyledGridButtonContainer>
					</StyledDivButtonContainer>
				</Grid>
			</Grid>

			{/* Movie Recommendation */}
			<Box marginTop="5rem" width="100%">
				<Typography variant="h3" align="center" gutterBottom>
					You might also like
				</Typography>
				{/* Loop through recommended movies... */}
				{recommendationsData ? (
					<MovieList movies={recommendationsData} numberOfMovies={12} />
				) : (
					<Box>Sorry, Nothing was found.</Box>
				)}
			</Box>
			{open && (
				<StyledModal closeAfterTransition open={open} onClose={() => setOpen(false)}>
					{data?.videos?.results?.length > 0 && (
						<Stylediframe
							autoPlay
							frameBorder="0"
							title="Trailer"
							src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
							allow="autoplay"
							allowFullScreen
						/>
					)}
				</StyledModal>
			)}
		</StyledGridSpaceAround>
	);
};

export default MovieInformation;
