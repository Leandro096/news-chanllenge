import styled from "styled-components";

export const TopHeadlinesContainer = styled.section`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto 0 auto;
    padding-bottom: 1rem;
`;

export const TopHeadlineGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin: 1rem;
`;

export const TopHeadlineHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;

    h1 {
        font-size: 2rem;

        @media (max-width: 768px) {
            font-size: 1.5rem;
            margin: 0;
        }
    }
`;

export const TopHeadlinePagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
`;

export const TopHeadlinePaginationInfo = styled.p`
    font-size: 1rem;
    margin: 0 0.5rem;
`;
