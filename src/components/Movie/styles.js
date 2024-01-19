import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)(({ theme }) => ({
	alignItems: 'center',
	fontWeight: 'bolder',
	textDecoration: 'none',
	[theme.breakpoints.up('xs')]: {
		display: 'flex',
		flexDirection: 'column',
	},
	'&:hover': {
		cursor: 'pointer',
	},
}));

const StyledImage = styled('img')(() => ({
	borderRadius: '20px',
	height: '300px',
	marginBottom: '10px',
	transition: 'transform 0.1s ease-in-out',
	'&:hover': {
		transform: 'scale(1.05)',
	},
}));

export { StyledLink, StyledImage };
