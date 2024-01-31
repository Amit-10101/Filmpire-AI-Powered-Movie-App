import { styled } from '@mui/system';

const StyledSearchContainer = styled('div')(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		display: 'flex',
		// flexDirection: 'column',
		justifyContent: 'center',
		width: '100%',
	},
}));

export default StyledSearchContainer;
