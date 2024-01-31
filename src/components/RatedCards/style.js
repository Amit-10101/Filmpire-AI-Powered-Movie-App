import { Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledBoxContainer = styled(Box)(({ theme }) => ({
	margin: '-2px',
	[theme.breakpoints.down('sm')]: {
		justifyContent: 'center',
	},
}));

export { StyledBoxContainer };
