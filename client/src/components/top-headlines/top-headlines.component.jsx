import { useEffect, useState } from "react";
import {
    TopHeadlinesContainer,
    TopHeadlineFilters,
    TopHeadlineCountryFilter,
    TopHeadlineCategoryFilter,
    TopHeadlineSourceFilter,
    TopHeadlineGrid,
    TopHeadlineCard,
    TopHeadlineImage,
    TopHeadlineTitle,
    TopHeadlineDescription,
    TopHeadlineAuthor,
    TopHeadlinePagination,
    TopHeadlinePaginationButton,
    TopHeadlinePaginationInfo,
    TopHeadlineHeader,
} from "./top-headlines.styles";
import Spinner from "../spinner/spinner.component";
import { getNews } from "../../utils/db/news";
import {
    categoriesConsts,
    countriesConsts,
    sourcesConsts,
} from "../../constants/top-headlines-filter.constant";

const TopHeadlines = () => {
    const [country, setCountry] = useState('us');
    const [categories, setCategories] = useState([]);
    const [sources, setSources] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [newsData, setNewsData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const queryCategories = categories.length ? categories.join(',') : '';
        
                const data = await getNews(country, queryCategories, currentPage);
                setNewsData(data.articles);
                setTotalPages(data.totalPages);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchNews();
    }, [country, categories, sources, currentPage]);

    const handleCountryChange = (e) => setCountry(e.target.value);

    const handleMultiSelectChange = (e, setter) => {
        const { options } = e.target;
        const selectedValues = Array.from(options)
            .filter(option => option.selected)
            .map(option => option.value);
        setter(selectedValues);
    };

    if (loading) {
        return <Spinner />;
    } else if (error) {
        return <p>{error}</p>;
    }

    return (
        <TopHeadlinesContainer>
            <TopHeadlineHeader>
                <h1>Principales Noticias</h1>
                <TopHeadlineFilters>
                    <TopHeadlineCountryFilter
                        value={country}
                        onChange={handleCountryChange}
                    >
                        <option value="">Select a country</option>
                        {countriesConsts.map(({ value, name }) => (
                            <option key={value} value={value}>
                                {name}
                            </option>
                        ))}
                    </TopHeadlineCountryFilter>

                    <TopHeadlineCategoryFilter
                        multiple
                        value={categories}
                        onChange={(e) => handleMultiSelectChange(e, setCategories)}
                    >
                        <option value="">Select categories</option>
                        {categoriesConsts.map(({ value, name }) => (
                            <option key={value} value={value}>
                                {name}
                            </option>
                        ))}
                    </TopHeadlineCategoryFilter>

                    <TopHeadlineSourceFilter
                        value={sources}
                        onChange={(e) => handleMultiSelectChange(e, setSources)}
                    >
                        <option value="">Select sources</option>
                        {sourcesConsts.map(({ value, name }) => (
                            <option key={value} value={value}>
                                {name}
                            </option>
                        ))}
                    </TopHeadlineSourceFilter>
                </TopHeadlineFilters>
            </TopHeadlineHeader>

            <TopHeadlineGrid>
                {newsData.length > 0 ? (
                    newsData.map((news, index) => (
                        <TopHeadlineCard key={index}>
                            <TopHeadlineTitle>{news.title}</TopHeadlineTitle>
                            <TopHeadlineImage src={news.urlToImage} alt={news.title} />
                            <TopHeadlineDescription>{news.description}</TopHeadlineDescription>
                            <TopHeadlineAuthor>{news.author}</TopHeadlineAuthor>
                        </TopHeadlineCard>
                    ))
                ) : (
                    <p>No news available.</p>
                )}
            </TopHeadlineGrid>

            <TopHeadlinePagination>
                <TopHeadlinePaginationButton
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </TopHeadlinePaginationButton>
                <TopHeadlinePaginationInfo>
                    Page {currentPage} of {totalPages}
                </TopHeadlinePaginationInfo>
                <TopHeadlinePaginationButton
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </TopHeadlinePaginationButton>
            </TopHeadlinePagination>
        </TopHeadlinesContainer>
    );
};

export default TopHeadlines;
