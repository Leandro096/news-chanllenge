import { useEffect } from "react";
import {
    TopHeadlinesContainer,
    TopHeadlineGrid,
    TopHeadlineHeader,
} from "./top-headlines.styles";
import Spinner from "../spinner/spinner.component";
import ArticleCard from "../article-card/article-card.component";
import Filters from "../filters/filters.component";
import Pagination from "../pagination/pagination.component";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsStart } from "../../store/news/news.action";
import { selectNewsReducer } from "../../store/news/news.selector";
import { FilterConsts } from "../../constants/filters.consts";
import { selectCurrentUser } from "../../store/user/user.selector";

const TopHeadlines = () => {
    const dispatch = useDispatch();
    const { articles, totalPages, currentPage, isLoading, errorMessage } = useSelector(selectNewsReducer);
    const userInfo = useSelector(selectCurrentUser);

    const preferences = userInfo ? userInfo.preference : FilterConsts.defaultTopHeadlines;

    useEffect(() => {
        const queries = { 
            ...preferences,
            page: currentPage,
        };
        dispatch(fetchNewsStart(queries));
    }, [currentPage, dispatch, preferences]);

    const handlePageChange = (page) => {
        dispatch(fetchNewsStart({ ...preferences, page }));
    };

    const handleFilterChange = (filters) => {
        dispatch(fetchNewsStart({ ...filters, page: 1 }));
    };

    if (isLoading) return <Spinner />;
    if (errorMessage) return <p>An error occurred. Please try in a moment.</p>;

    return (
        <TopHeadlinesContainer>
            <TopHeadlineHeader>
                <h1>Top Headlines</h1>
                <Filters setFilters={handleFilterChange} />
            </TopHeadlineHeader>

            {articles.length ? (
                <>
                    <TopHeadlineGrid>
                        {articles.map((news, index) => (
                            <ArticleCard key={index} article={news} />
                        ))}
                    </TopHeadlineGrid>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        totalResults={articles.length}
                        onPageChange={handlePageChange}
                    />
                </>
            ) : (
                <p>No news available.</p>
            )}
        </TopHeadlinesContainer>
    );
};

export default TopHeadlines;