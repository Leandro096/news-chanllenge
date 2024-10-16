import PropTypes from 'prop-types';
import {
    DropdownContainer,
    DropdownButton,
    DropdownContent,
    DropdownItem,
} from './dropdown.styles';

const Dropdown = ({title, options}) => {
    return (
        <DropdownContainer>
            <DropdownButton>{title}</DropdownButton>
            <DropdownContent>
                {options.map((option, index) => (
                    <DropdownItem key={index} to={option.route}>{option.title}</DropdownItem>
                ))}
            </DropdownContent>
        </DropdownContainer>
    );
};

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
};

export default Dropdown;
