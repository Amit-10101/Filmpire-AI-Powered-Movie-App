import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	ListSubheader,
	ListItemIcon,
	Box,
	CircularProgress,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

import { useGetGenresQuery } from '../../services/TMDB.js';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory.js';
import StyledComponents, { StyledLinks, StyledGenreImage } from './styles.js';
import genreIcons from '../../assets/genres';

// Filmpire Logo Links
const blueLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const redLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const categories = [
	{ label: 'Popular', value: 'popular' },
	{ label: 'Top Rated', value: 'top_rated' },
	{ label: 'Upcoming', value: 'upcoming' },
];

const Sidebar = ({ setMobileOpen }) => {
	const theme = useTheme();
	const { data, isFetching } = useGetGenresQuery();

	const dispatch = useDispatch();
	// const action = selectGenreOrCategory();

	return (
		<>
			<Link to="/" style={StyledComponents.imageLink}>
				<img
					style={StyledComponents.image}
					src={theme.palette.mode === 'light' ? blueLogo : redLogo}
					alt="Filmpire Logo"
				/>
			</Link>
			<Divider />
			<List>
				<ListSubheader>Categories</ListSubheader>
				{categories.map(({ label, value }) => (
					<StyledLinks key={value} className={{}} to="/">
						<ListItemButton onClick={() => dispatch(selectGenreOrCategory(value))}>
							<ListItemIcon>
								<StyledGenreImage
									src={genreIcons[label.toLowerCase()]}
									className={{}}
									height={30}
								/>
							</ListItemIcon>
							<ListItemText primary={label} />
						</ListItemButton>
					</StyledLinks>
				))}
				<Divider sx={{ mt: 1 }} />
				<ListSubheader>Genres</ListSubheader>
				{isFetching ? (
					<Box display="flex" justifyContent="center">
						<CircularProgress size="4rem" />
					</Box>
				) : (
					data.genres.map(({ name, id }) => (
						<StyledLinks key={id} className={{}} to="/">
							<ListItemButton onClick={() => dispatch(selectGenreOrCategory(id))}>
								<ListItemIcon>
									<StyledGenreImage
										src={genreIcons[name.toLowerCase()]}
										className={{}}
										height={30}
									/>
								</ListItemIcon>
								<ListItemText primary={name} />
							</ListItemButton>
						</StyledLinks>
					))
				)}
			</List>
		</>
	);
};

export default Sidebar;
