import { useParams } from 'react-router-dom';
import {

} from './news-articles.styles'
import { useEffect } from 'react';

const NewsArticles = () => {
    const { newsSection } = useParams();

    useEffect(() => {
        console.log(newsSection)
    }, [newsSection])
    
    return (
        <section>
            <h1>{newsSection.toLocaleUpperCase()}</h1>
        </section>
    )
}

export default NewsArticles
