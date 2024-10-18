import styled from "styled-components";

export const NewsArticlesContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    padding: 1rem;

    h1 {
        text-align: center;
        font-size: 1.5rem;
        margin: 0;
    }
`;

export const NewsArticlesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    justify-content: center;
`;
