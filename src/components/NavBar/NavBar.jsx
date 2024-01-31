import React, { useContext, useEffect, useState } from 'react';
import {
	AppBar,
	IconButton,
	// Toolbar,
	Drawer,
	Button,
	Avatar,
	useMediaQuery,
} from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setUser, userSelector } from '../../features/auth';
import { StyledToolbar, StyledIconButton } from './styles';
// import { Sidebar } from '../index.js';
import Sidebar from '../Sidebar/Sidebar';
import Search from '../Search/Search';
import { fetchToken, createSessionId, moviesApi } from '../../utils';
import { ColorModeContext } from '../../utils/ToggleColorMode';

const NavBar = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

	// Color Mode Toggle Context
	const colorMode = useContext(ColorModeContext);

	const isMobile = useMediaQuery('(max-width:600px)');
	const theme = useTheme();
	const dispatch = useDispatch();
	const { isAuthenticated, user } = useSelector(userSelector);
	// console.log(user);

	const token = localStorage.getItem('request_token');
	const sessionIdFromLocalStorage = localStorage.getItem('session_id');

	useEffect(() => {
		const logInUser = async () => {
			if (token) {
				if (sessionIdFromLocalStorage) {
					const { data: userData } = await moviesApi.get(`/account?session_id=${sessionIdFromLocalStorage}`);

					dispatch(setUser(userData));
				} else {
					const sessionId = await createSessionId();
					const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);

					dispatch(setUser(userData));
				}
			}
		};

		logInUser();
	}, [token]);

	return (
		<>
			<AppBar position="fixed">
				<StyledToolbar onClick={() => {}}>
					{isMobile && (
						<StyledIconButton
							color="inherit"
							edge="start"
							styles={{ outline: 'none' }}
							onClick={() => {
								setMobileOpen((prevMobileOpen) => !prevMobileOpen);
							}}
						>
							<Menu />
						</StyledIconButton>
					)}
					<IconButton color="inherit" sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
						{theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
					</IconButton>
					{!isMobile && <Search />}
					<div>
						{!isAuthenticated ? (
							<Button color="inherit" onClick={fetchToken}>
								Login &nbsp; <AccountCircle />
							</Button>
						) : (
							<Button
								color="inherit"
								component={Link}
								to={`/profile/${user.id}`}
								style={{
									'&:hover': {
										color: 'white !important',
										textDecoration: 'none',
									},
								}}
								onClick={() => {}}
							>
								{!isMobile && <>My Movies &nbsp;</>}
								<Avatar
									style={{ height: '30', width: '30' }}
									// src={"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"}
									src={`https://www.themoviedb.org/t/p/w64_and_h64_face${user?.avatar?.tmdb?.avatar_path}`}
									alt="Profile"
								/>
							</Button>
						)}
					</div>
					{isMobile && <Search />}
				</StyledToolbar>
			</AppBar>
			<div>
				<nav>
					{isMobile ? (
						<Drawer
							variant="temporary"
							anchor="right"
							open={mobileOpen}
							classes={{ paper: {} }}
							ModalProps={{ keepMounted: true }}
							onClose={() => {
								setMobileOpen((prevMobileOpen) => !prevMobileOpen);
							}}
						>
							<Sidebar setMobileOpen={setMobileOpen} />
						</Drawer>
					) : (
						<Drawer variant="permanent" open classes={{ paper: {} }}>
							<Sidebar setMobileOpen={setMobileOpen} />
						</Drawer>
					)}
				</nav>
			</div>
		</>
	);
};

export default NavBar;
