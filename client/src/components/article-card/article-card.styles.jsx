import styled from "styled-components";

export const ArticleCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    border-radius: 0.6rem;
    gap: 0.5rem;
    padding: 1rem;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.01);
    }
`;

export const ArticleTitle = styled.h1`
    font-size: 1.5rem;
    margin: 0;
`;

export const ArticleImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 0.6rem;
`;

export const ArticleDescription = styled.p`
    font-size: 1rem;
    margin: 0;
`;

export const ArticleAuthor = styled.p`
    font-size: 0.8rem;
    margin: 0;
`;
