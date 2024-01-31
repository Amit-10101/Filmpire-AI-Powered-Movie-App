import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import StyledSearchContainer from './style';
import { searchMovie } from '../../features/currentGenreOrCategory';

const Search = () => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();

	const location = useLocation();

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			dispatch(searchMovie(query));
		}
	};

	if (location.pathname !== '/') return null;

	return (
		<StyledSearchContainer>
			<TextField
				onKeyDown={handleKeyPress}
				value={query}
				onChange={(event) => setQuery(event.target.value)}
				variant="standard"
				InputProps={{
					sx: (theme) => ({
						color: theme.palette.mode === 'light' && 'black',
						filter: theme.palette.mode === 'light' && 'invert(1)',
						[theme.breakpoints.down('sm')]: {
							marginTop: '-10px',
							marginBottom: '10px',
						},
					}),
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					),
				}}
			/>
		</StyledSearchContainer>
	);
};

export default Search;
