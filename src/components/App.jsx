import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Actors, MovieInformation, Movies, NavBar, Profile } from './index.js';
// import useStyles from './styles.js';
import StyledComponents from './styles.js';

const App = () => (
	// console.log(1);

	<div style={StyledComponents.root}>
		<CssBaseline />
		<NavBar />
		<main style={StyledComponents.content}>
			<div style={StyledComponents.toolbar} />
			<Routes>
				<Route exact path="/" element={<Movies />} />
				<Route exact path="/movie/:id" element={<MovieInformation />} />
				<Route exact path="/actors/:id" element={<Actors />} />
				<Route exact path="/profile/:id" element={<Profile />} />
			</Routes>
		</main>
	</div>
);
export default App;
