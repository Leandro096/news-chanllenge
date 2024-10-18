import { useEffect } from "react";
import TopHeadlines from "../../components/top-headlines/top-headlines.component"
import { useDispatch } from "react-redux";
import { fetchNewsStart } from "../../store/news/news.action";

const Home = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchNewsStart());
    }, [dispatch]);
    
    return (
        <TopHeadlines />
    );
};

export default Home
