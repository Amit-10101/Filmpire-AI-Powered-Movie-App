import React from 'react';
// import { Typography, Button } from '@mui/material';

import { StyledDivContainer, StyledButton, StyledTypographyPageNumber } from './style';

const Pagination = ({ currentPage, setPage, totalPages }) => {
	if (totalPages === 0) return null;

	const handlePrev = () => {
		if (currentPage !== 1) {
			setPage((prevPage) => prevPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage !== totalPages) {
			setPage((prevPage) => prevPage + 1);
		}
	};

	return (
		// <StyledDivContainer style={{ marginLeft: '270px' }}>
		<StyledDivContainer>
			<StyledButton variant="contained" color="primary" type="button" onClick={handlePrev}>
				Prev
			</StyledButton>
			<StyledTypographyPageNumber variant="h5">{currentPage}</StyledTypographyPageNumber>
			<StyledButton variant="contained" color="primary" type="button" onClick={handleNext}>
				Next
			</StyledButton>
		</StyledDivContainer>
	);
};

export default Pagination;
