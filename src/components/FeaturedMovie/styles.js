import { Box, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

const StyledBoxFeaturedCardContainer = styled(Box)(({ theme }) => ({
	marginBottom: '20px',
	display: 'flex',
	justifyContent: 'center',
	height: '490px',
	textDecoration: 'none',
	borderRadius: '20px',
	boxShadow: theme.palette.mode === 'dark' && '0 0 0.75em #bcbaba',
}));

const StyledCard = styled(Card)(() => ({
	width: '100%',
	display: 'flex',
	justifyContent: 'flex-end',
	flexDirection: 'column',
	position: 'relative',
	borderRadius: '20px',
}));

const StyledCardMedia = styled(CardMedia)(() => ({
	position: 'absolute',
	top: '0',
	right: '0',
	height: '100%',
	width: '100%',
	backgroundColor: 'rgba(0, 0, 0, 0.575)',
	backgroundBlendMode: 'darken',
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
	position: 'relative',
	backgroundColor: 'transparent',
	color: '#fff',
	width: '40%',
	[theme.breakpoints.down('md')]: {
		width: '100%',
	},
	[theme.breakpoints.down('sm')]: {
		width: '100%',
	},
}));

export { StyledBoxFeaturedCardContainer, StyledCard, StyledCardMedia, StyledCardContent };
