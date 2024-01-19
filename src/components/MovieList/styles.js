import { styled } from '@mui/system';
import { Grid } from '@mui/material';

const StyledGrid = styled(Grid)(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
	overflow: 'auto',
	// marginLeft: '240px',
	[theme.breakpoints.down('sm')]: {
		justifyContent: 'center',
	},
}));

export { StyledGrid };
