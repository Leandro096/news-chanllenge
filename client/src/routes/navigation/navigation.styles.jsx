import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@mui/material"

export const NavigationContainer = styled.nav`
    display: flex;
    position: fixed;
    width: 100%;
    height: 75px;
    z-index: 1000;
    background-color: #303A63;
`;

export const NavigationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    height: 100%;
    padding: 0 2rem;
    color: white;
    margin: 0 auto;

    h1{
        font-family: "Dancing Script";
        font-size: 2.5rem;
        user-select: none;
        cursor: pointer;
        margin: 0;
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 1.95rem;
        }
    }
`;

export const NewsSections = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    font-size: 1.5rem;
    user-select: none;

    @media (max-width: 425px) {
        font-size: 1rem;
    }
`;

export const MUIButton = styled(Button)`
    font-size: 1rem;
    
    span {
        display: none;
    }

    @media (max-width: 600px) {
        font-size: 0.8rem;
    }

    @media (min-width: 425px) {
        span {
            display: inline;
        }
    }
`;

export const NewsSectionLink = styled(NavLink)`
    color: white;
    height: 100%;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    transition: 0.3s;
    display: flex;
    align-items: center;
    padding: 0.5rem;

    &:hover {
        color: #f4f4f4;
    }

    &.active {
        background-color: white;
        color: #303A63;
    }

    @media (max-width: 320px) {
        font-size: 0.8rem;
    }
`;

export const MainContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    padding: 5em 0 0 0;
    height: 100vh;
    margin: 0 auto;
`;
