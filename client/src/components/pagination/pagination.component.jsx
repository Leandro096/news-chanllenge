import PropTypes from 'prop-types';
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { PaginationContainer, PaginationInfo } from './pagination.styles';

const Pagination = ({ currentPage, totalPages, totalResults, onPageChange }) => (
    <PaginationContainer>
        <IconButton
            aria-label="backward"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
        >
            <ArrowBackIosIcon />
        </IconButton>
        <PaginationInfo>
            Page {currentPage} of {totalPages} | Total Results: {totalResults}
        </PaginationInfo>
        <IconButton
            aria-label="forward"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
        >
            <ArrowForwardIosIcon />
        </IconButton>
    </PaginationContainer>
);

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    totalResults: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;