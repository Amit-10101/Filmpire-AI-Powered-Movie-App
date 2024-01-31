import React, { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Actors, MovieInformation, Movies, NavBar, Profile } from './index.js';
// import useStyles from './styles.js';
import { StyledDivRoot, StyledMainContent, StyledDivToolbar } from './styles.js';
import useAlan from './Alan.jsx';

const App = () => {
	const alanBtnContainer = useRef();
	useAlan();

	return (
		<StyledDivRoot>
			<CssBaseline />
			<NavBar />
			<StyledMainContent>
				<StyledDivToolbar />
				<Routes>
					<Route exact path="/" element={<Movies />} />
					<Route exact path="/approved" element={<Movies />} />
					<Route exact path="/movie/:id" element={<MovieInformation />} />
					<Route exact path="/actors/:id" element={<Actors />} />
					<Route exact path="/profile/:id" element={<Profile />} />
				</Routes>
			</StyledMainContent>
			<div ref={alanBtnContainer} />
		</StyledDivRoot>
	);
};
export default App;
