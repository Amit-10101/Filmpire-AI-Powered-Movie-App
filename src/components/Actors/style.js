import { styled } from '@mui/system';

const StyledProfileImg = styled('img')(({ theme }) => ({
	maxWidth: '90%',
	objectFit: 'cover',
	margin: '20px auto !important',
	boxShadow: theme.palette.mode === 'light' ? '0.5em 1em 2.5em gray' : '0.5em 1em 2.5em #a0a0a0',
	borderRadius: '20px',
	height: '75%',
	'@media (min-width:2200px)': {
		height: '90%',
		borderRadius: '40px',
	},
	[theme.breakpoints.down('lg')]: {
		height: '95%',
	},
}));

export { StyledProfileImg };
