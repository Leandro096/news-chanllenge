import { useEffect, useState } from "react";
import {
    TopHeadlinesContainer,
    TopHeadlineGrid,
    TopHeadlinePagination,
    TopHeadlinePaginationInfo,
    TopHeadlineHeader,
} from "./top-headlines.styles";
import Spinner from "../spinner/spinner.component";
import { getNews } from "../../utils/db/news";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArticleCard from "../article-card/article-card.component";
import Filters from "../filters/filters.component";

const defaultFilters = {
    country: "",
    category: "",
    source: "",
    language: "es",
};

const TopHeadlines = () => {
    const [filters, setFilters] = useState(defaultFilters);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsData, setNewsData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const params = { 
                    ...filters, 
                    page: currentPage 
                };
                const data = await getNews(params);
                setNewsData(data.articles);
                setTotalPages(data.totalPages);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchNews();
    }, [filters, currentPage]);

    if (loading) return <Spinner />;
    if (error) return <p>{error}</p>;

    const handlePageChange = (direction) => {
        setCurrentPage((prev) => 
            direction === "next" ? prev + 1 : Math.max(prev - 1, 1)
        );
    };

    return (
        <TopHeadlinesContainer>
            <TopHeadlineHeader>
                <h1>Top Headlines</h1>
                <Filters setFilters={setFilters} />
            </TopHeadlineHeader>

            {newsData.length ? (
                <TopHeadlineGrid>
                    {newsData.map((news, index) => (
                        <ArticleCard key={index} article={news} />
                    ))}
                </TopHeadlineGrid>
            ) : (
                <p>No news available.</p>
            )}

            <TopHeadlinePagination>
                <IconButton
                    aria-label="backward"
                    onClick={() => handlePageChange("prev")}
                    disabled={currentPage === 1}
                >
                    <ArrowBackIosIcon />
                </IconButton>
                <TopHeadlinePaginationInfo>
                    Page {currentPage} of {totalPages}
                </TopHeadlinePaginationInfo>
                <IconButton
                    aria-label="forward"
                    onClick={() => handlePageChange("next")}
                    disabled={currentPage === totalPages}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </TopHeadlinePagination>
        </TopHeadlinesContainer>
    );
};

export default TopHeadlines;
