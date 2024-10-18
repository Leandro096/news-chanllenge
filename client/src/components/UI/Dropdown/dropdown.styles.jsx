import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Styled Components
export const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
    height: 100%;
`;

export const DropdownButton = styled.div`
    background-color: #303A63;
    color: white;
    padding: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    height: 100%;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #303A63;
    }

    @media (max-width: 425px) {
        font-size: 0.9rem;
    }
`;

export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    right: 0;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius: 0 0 5px 5px;
    z-index: 1;

    ${DropdownContainer}:hover & {
        display: block;
    }
`;

export const DropdownItem = styled(NavLink)`
    color: #303A63;
    padding: 12px 16px;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    display: block;

    &:hover {
        background-color: #ddd;
    }

    &.active {
        background-color: #303A63;
        color: white;
    }

    @media (max-width: 320px) {
        font-size: 0.8rem;
    }
`;
