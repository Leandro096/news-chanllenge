import { useParams } from 'react-router-dom';
import { NewsArticlesContainer, NewsArticlesWrapper } from './news-articles.styles'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsByEverythingStart } from '../../store/news/news.action';
import FiltersEverything from '../../components/filters-everithing/filters-everything.component';
import { selectNewsReducer } from '../../store/news/news.selector';
import ArticleCard from '../../components/article-card/article-card.component';
import Spinner from '../../components/spinner/spinner.component';
import { FilterConsts } from '../../constants/filters.consts';
import Pagination from '../../components/pagination/pagination.component';

const NewsArticles = () => {
    const { newsSection } = useParams();

    const { articles, currentPage, totalPages, isLoading, errorMessage } = useSelector(selectNewsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        const queries = {
            ...FilterConsts.defaultEverything,
            page: currentPage,
            q: newsSection
        };
        dispatch(fetchNewsByEverythingStart(queries));
    }, [currentPage, dispatch, newsSection]);

    const handlePageChange = (page) => {
        dispatch(fetchNewsByEverythingStart({
            ...FilterConsts.defaultEverything,
            page,
            q: newsSection
        }));
    };

    const handlePageSizeChange = (newPageSize) => {
        dispatch(fetchNewsByEverythingStart({
            ...FilterConsts.defaultEverything,
            page: 1,
            pageSize: newPageSize,
            q: newsSection
        }));
    };

    return (
        <NewsArticlesContainer>
            <h1>{newsSection.toLocaleUpperCase()}</h1>
            <FiltersEverything setFilters={(filters) => dispatch(fetchNewsByEverythingStart({... filters, page: 1}))} />
            {errorMessage ? (
                <p>An error occured. Please try in a moment.</p>
            ) : (
                isLoading ? (
                    <Spinner />
                ) : articles.length > 0 ? (
                    <NewsArticlesWrapper>
                        {articles.map((article, index) => (
                            <ArticleCard key={index} article={article} />
                        ))}
                    </NewsArticlesWrapper>
                ) : (
                    <h2>No news found</h2>
                )
            )}
            {articles && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalResults={articles.length}
                    onPageChange={handlePageChange}
                    onPageSizeChange={handlePageSizeChange}
                />
            )}
        </NewsArticlesContainer>
    );
};

export default NewsArticles
