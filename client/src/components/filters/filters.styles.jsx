import styled from "styled-components";

export const FilterContainer = styled.div`
    position: relative;
    z-index: 100;
`;

export const FilterWrapper = styled.div` 
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    background-color: white;
    width: 400px;
    gap: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 1rem 0.3rem 1rem 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const CountryFilter = styled.select`
    padding: 0.5rem;
`;

export const CategoryFilter = styled.select`
    padding: 0.5rem;
`;

export const SourceFilter = styled.select`
    padding: 0.5rem;
`;

export const FilterGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 1rem;
    padding: 0.8rem 0.5rem 0.5rem 0.5rem;
    position: relative;

    h3 {
        position: absolute;
        top: -0.7rem;
        background-color: white;
        text-align: center;
        margin: 0;
    }
`;

export const FilterOption = styled.div`
    padding: 0.5rem 1rem;
    border-radius: 50px;
    background-color: ${({ isSelected }) => (isSelected ? "#1976d2" : "#e0e0e0")};
    color: ${({ isSelected }) => (isSelected ? "#fff" : "#000")};
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    text-align: center;

    &:hover {
        background-color: #1565c0;
        color: #fff;
    }
`;

export const FilterButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
