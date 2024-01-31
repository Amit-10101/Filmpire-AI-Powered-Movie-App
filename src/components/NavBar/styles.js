import { styled } from '@mui/system';
import { Toolbar, IconButton, Drawer } from '@mui/material';

const DrawerWidth = '240px';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	height: '80px',
	display: 'flex',
	justifyContent: 'space-between',
	marginLeft: '240px',
	[theme.breakpoints.down('sm')]: {
		marginLeft: '0',
		flexWrap: 'wrap', // Search bar alignment problem solution
	},
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
	marginRight: theme.spacing(2),
	[theme.breakpoints.up('sm')]: {
		display: 'none',
	},
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
	[theme.breakpoints.up('sm')]: {
		width: DrawerWidth,
		flexShrink: '0',
	},
}));

export { StyledToolbar, StyledIconButton, StyledDrawer };
