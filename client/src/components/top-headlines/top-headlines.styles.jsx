import styled from "styled-components";

export const TopHeadlinesContainer = styled.section`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto 2rem auto;
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

export const TopHeadlineFilters = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const TopHeadlineCountryFilter = styled.select`
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    cursor: pointer;

    &:option {
        padding: 0.5rem 1rem;
        margin: 0 0.5rem;
        cursor: pointer;
    }
`;

export const TopHeadlineCategoryFilter = styled.select`
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    cursor: pointer;

    &:option {
        padding: 0.5rem 1rem;
        margin: 0 0.5rem;
        cursor: pointer;
    }
`;

export const TopHeadlineSourceFilter = styled.select`
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    cursor: pointer;

    &:option {
        padding: 0.5rem 1rem;
        margin: 0 0.5rem;
        cursor: pointer;
    }
`;

export const TopHeadlineCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    border-radius: 0.6rem;
    padding: 1rem;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.01);
    }
`;

export const TopHeadlineImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

export const TopHeadlineTitle = styled.h1`
    font-size: 1.5rem;
    margin: 0.5rem 0;
`;

export const TopHeadlineDescription = styled.p`
    font-size: 1rem;
    margin: 0.5rem 0;
`;

export const TopHeadlineAuthor = styled.p`
    font-size: 0.8rem;
    margin: 0.5rem 0;
`;

export const TopHeadlinePagination = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem;
`;

export const TopHeadlinePaginationButton = styled.button`
    background-color: #000;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #333;
    }
`;

export const TopHeadlinePaginationInfo = styled.p`
    font-size: 1rem;
    margin: 0 0.5rem;
`;
