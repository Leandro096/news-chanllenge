import { Route, Routes } from "react-router-dom";
import NewsArticles from "../news-articles/news-articles.route";
import NewsSectionPreview from "../../components/news-sections-preview/news-sections-preview.component";


const NewsSection = () => {
    return (
        <Routes>
            <Route index element={<NewsSectionPreview />} />
            <Route path="/:newsSection" element={<NewsArticles />} />
        </Routes>
    )
}

export default NewsSection;
