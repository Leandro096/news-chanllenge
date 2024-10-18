import PropTypes from "prop-types";
import { defaultNewsPicture } from "../../assets/images";
import {
    ArticleCardContainer,
    ArticleTitle,
    ArticleImage,
    ArticleDescription,
    ArticleAuthor
} from "./article-card.styles";

const ArticleCard = (article) => {
    const { title, urlToImage, description, author, source, url } = article.article;

    const handleCardClick = () => {
        window.open(url, "_blank"); // Open URL in a new tab
    };

    return (
        <ArticleCardContainer onClick={handleCardClick}>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleImage src={urlToImage || defaultNewsPicture} alt={title} />
            <ArticleDescription>{description || "Sin descripcion"}</ArticleDescription>
            <ArticleAuthor>{author} - {source.name}</ArticleAuthor>
        </ArticleCardContainer>
    )
}

ArticleCard.propTypes = {
    article: PropTypes.object.isRequired
}

export default ArticleCard
