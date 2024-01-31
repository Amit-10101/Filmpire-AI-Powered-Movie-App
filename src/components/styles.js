import { styled } from '@mui/system';

const StyledDivRoot = styled('div')(() => ({
	display: 'flex',
	height: '100%',
}));

const StyledMainContent = styled('main')(({ theme }) => ({
	marginLeft: '270px',
	width: '100%',
	flexGrow: '1',
	padding: '2em 1em',
	[theme.breakpoints.down('sm')]: {
		marginLeft: '0',
	},
}));

const StyledDivToolbar = styled('div')(() => ({
	height: '70px',
}));

export { StyledDivRoot, StyledMainContent, StyledDivToolbar };
