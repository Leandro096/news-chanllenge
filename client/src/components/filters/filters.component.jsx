import PropTypes from "prop-types";
import {
    FilterContainer,
    FilterWrapper,
    FilterOption,
    FilterGroup,
    FilterButtons,
} from "./filters.styles";
import { FilterConsts } from "../../constants/filters.consts";
import { Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { updatePreferenceStart } from "../../store/user/user.action";

const defaultFilters = {
    countries: "",
    categories: "",
    sources: "",
    language: "es",
};

const Filters = ({ setFilters }) => {
    const currentUserPreferences = useSelector(selectCurrentUser);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filtersValues, setFiltersValues] = useState(defaultFilters);

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUserPreferences?.preference) {
            setFiltersValues(currentUserPreferences.preference);
        }
    }, [currentUserPreferences]);

    const handleFilterToggle = (key, value) => {
        setFiltersValues((prev) => {
            const newFilters = { ...prev, [key]: prev[key] === value ? "" : value };

            if (key === "sources" && newFilters.sources) {
                newFilters.countries = "";
                newFilters.categories = "";
            } else if ((key === "countries" || key === "categories") && (newFilters.countries || newFilters.categories)) {
                newFilters.sources = "";
            }

            return newFilters;
        });
    };

    const handleSaveFilters = () => {
        dispatch(updatePreferenceStart(filtersValues));
        setFilters(filtersValues);
        setIsFilterOpen(false);
    };

    return (
        <FilterContainer>
            <Button
                variant="contained"
                sx={{ backgroundColor: "#1976d2" }}
                onClick={() => setIsFilterOpen((prev) => !prev)}
                endIcon={<FilterListIcon />}
            >
                Filters
            </Button>

            {isFilterOpen && (
                <FilterWrapper>
                    {[
                        { label: "Countries", options: FilterConsts.countries, key: "countries" },
                        { label: "Categories", options: FilterConsts.categories, key: "categories" },
                        { label: "Sources", options: FilterConsts.sources, key: "sources" },
                    ].map(({ label, options, key }) => (
                        <FilterGroup key={key}>
                            <h3>{label}</h3>
                            {options.map(({ value, name }) => (
                                <FilterOption
                                    key={value}
                                    isSelected={filtersValues[key] === value}
                                    onClick={() => handleFilterToggle(key, value)}
                                >
                                    {name}
                                </FilterOption>
                            ))}
                        </FilterGroup>
                    ))}

                    <FilterButtons>
                        <Button variant="contained" color="error" onClick={() => setIsFilterOpen(false)}>
                            Cancelar
                        </Button>
                        <Button variant="contained" color="success" onClick={handleSaveFilters}>
                            Aplicar
                        </Button>
                    </FilterButtons>
                </FilterWrapper>
            )}
        </FilterContainer>
    );
};

Filters.propTypes = {
    setFilters: PropTypes.func.isRequired,
};

export default Filters;
