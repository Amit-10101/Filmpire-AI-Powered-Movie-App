import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledComponents = {
	imageLink: {
		display: 'flex',
		justifyContent: 'center',
		padding: '10% 0',
	},
	image: {
		width: '70%',
	},
};

const StyledLinks = styled(Link)(({ theme }) => ({
	color: theme.palette.text.primary,
	textDecoration: 'none',
}));

const StyledGenreImage = styled('img')(({ theme }) => ({
	// Change it afterwords
	filter: theme.palette.mode === 'dark' && 'invert(1)',
}));

export default StyledComponents;
export { StyledLinks, StyledGenreImage };
