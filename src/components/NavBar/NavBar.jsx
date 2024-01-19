import React, { useState } from 'react';
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

import { StyledToolbar, StyledIconButton } from './styles';
// import { Sidebar } from '../index.js';
import Sidebar from '../Sidebar/Sidebar';

const NavBar = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const isMobile = useMediaQuery('(max-width:600px)');
	const theme = useTheme();
	const isAuthenticated = true;

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
					<IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
						{theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
					</IconButton>
					{!isMobile && 'Search...'}
					<div>
						{!isAuthenticated ? (
							<Button color="inherit" onClick={() => {}}>
								Login &nbsp; <AccountCircle />
							</Button>
						) : (
							<Button
								color="inherit"
								component={Link}
								to="/profile/:id"
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
									src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
									alt="Profile"
								/>
							</Button>
						)}
					</div>
					{isMobile && 'Search...'}
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
