import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NewsSectionsPreviewContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin: 1rem auto;
    max-width: 1440px;
    padding: 1rem;
`;

export const NewsSectionCard = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #303A63;
    border-radius: 5px;
    padding: 1rem;
    cursor: pointer;
    transition: transform 0.2s;
    font-size: 3rem;
    color: #5266A6;
    
    &:hover {
        transform: scale(1.02);
    }

    h1 {
        font-size: 1.5rem;
        margin-top: 0.8rem;
        text-align: center;
    }
`;
