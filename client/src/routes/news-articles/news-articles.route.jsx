import { useParams } from 'react-router-dom';
import { NewsArticlesContainer, NewsArticlesWrapper } from './news-articles.styles'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsByEverythingStart } from '../../store/news/news.action';
import FiltersEverything from '../../components/filters-everithing/filters-everything.component';
import { selectIsNewsLoading, selectNewsArticles } from '../../store/news/news.selector';
import ArticleCard from '../../components/article-card/article-card.component';
import Spinner from '../../components/spinner/spinner.component';

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


const NewsArticles = () => {
    const [filters, setFilters] = useState(defaultFilters);
    const { newsSection } = useParams();

    // Selectors
    const newsState = useSelector(selectNewsArticles);
    const isNewsLoading = useSelector(selectIsNewsLoading);

    const newsData = newsState?.articles ?? [];

    const dispatch = useDispatch();

    useEffect(() => {
        const queries = { ...filters, q: newsSection };
        dispatch(fetchNewsByEverythingStart(queries));
    }, [dispatch, newsSection, filters]);

    return (
        <NewsArticlesContainer>
            <h1>{newsSection.toLocaleUpperCase()}</h1>
            <FiltersEverything setFilters={setFilters} />
            {isNewsLoading ? (
                <Spinner />
            ) : newsData.length > 0 ? (
                <NewsArticlesWrapper>
                    {newsData.map((article, index) => (
                        <ArticleCard key={index} article={article} />
                    ))}
                </NewsArticlesWrapper>
            ) : (
                <h2>No news found</h2>
            )}
        </NewsArticlesContainer>
    );
};

export default NewsArticles
