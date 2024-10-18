import { useState } from "react";
import PropTypes from "prop-types";
import {
    FilterEverythingContainer,
    FilterEverythingWrapper,
    FilterEverythingGroup,
    FilterEverythingOption,
    FilterEverythingButtons,
} from "./filters-everything.styles";
import { FilterConsts } from "../../constants/filters.consts";
import { Button, TextField, Select, MenuItem } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const defaultFilters = {
    q: "",
    searchIn: "",
    sources: "",
    domains: "",
    excludeDomains: "",
    from: "",
    to: "",
    language: "en",
    sortBy: "publishedAt",
};

const FiltersEverything = ({ setFilters }) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filtersValues, setFiltersValues] = useState(defaultFilters);

    const handleFilterChange = (key, value) => {
        setFiltersValues((prev) => ({ ...prev, [key]: value }));
    };

    const handleSaveFilters = () => {
        setFilters(filtersValues);
        setIsFilterOpen(false);
    };

    return (
        <FilterEverythingContainer>
            <Button
                variant="contained"
                sx={{ backgroundColor: "#1976d2" }}
                onClick={() => setIsFilterOpen((prev) => !prev)}
                endIcon={<FilterListIcon />}
            >
                Filtros
            </Button>

            {isFilterOpen && (
                <FilterEverythingWrapper>
                    {[
                        { label: "Sources", options: FilterConsts.sources, key: "sources" },
                    ].map(({ label, options, key }) => (
                        <FilterEverythingGroup key={key}>
                            <h3>{label}</h3>
                            {options.map(({ value, name }) => (
                                <FilterEverythingOption
                                    key={value}
                                    isSelected={filtersValues[key] === value}
                                    onClick={() => handleFilterChange(key, value)}
                                >
                                    {name}
                                </FilterEverythingOption>
                            ))}
                        </FilterEverythingGroup>
                    ))}

                    <FilterEverythingGroup>
                        <TextField
                            label="From"
                            type="date"
                            value={filtersValues.from}
                            onChange={(e) => setFiltersValues((prev) => ({ ...prev, from: e.target.value }))}
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            label="To"
                            type="date"
                            value={filtersValues.to}
                            onChange={(e) => setFiltersValues((prev) => ({ ...prev, to: e.target.value }))}
                            InputLabelProps={{ shrink: true }}
                        />
                    </FilterEverythingGroup>

                    <FilterEverythingGroup>
                        <h3>Sort By</h3>
                        <Select
                            value={filtersValues.sortBy}
                            onChange={(e) => setFiltersValues((prev) => ({ ...prev, sortBy: e.target.value }))}
                        >
                            {FilterConsts.sortBy.map(({ value, name }) => (
                                <MenuItem key={value} value={value}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FilterEverythingGroup>

                    <FilterEverythingButtons>
                        <Button variant="contained" color="error" onClick={() => setIsFilterOpen(false)}>
                            Cancelar
                        </Button>
                        <Button variant="contained" color="success" onClick={handleSaveFilters}>
                            Aplicar
                        </Button>
                    </FilterEverythingButtons>
                </FilterEverythingWrapper>
            )}
        </FilterEverythingContainer>
    );
};

FiltersEverything.propTypes = {
    setFilters: PropTypes.func.isRequired,
};

export default FiltersEverything;
