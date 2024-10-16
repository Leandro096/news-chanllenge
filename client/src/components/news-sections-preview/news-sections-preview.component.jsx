import { newsSections } from "../../constants/news-sections"
import {
    NewsSectionsPreviewContainer,
    NewsSectionCard,
} from "./news-sections-preview.styles"

const NewsSectionPreview = () => {
    const getNewsSections = (language = "en") => {
        const sections = newsSections.find(
            (section) => section.language === language
        ).sections
        return sections
    }

    return (
        <NewsSectionsPreviewContainer>
            {getNewsSections("en").map((section, index) => (
                <NewsSectionCard key={index} to={section.route}>
                    {section.icon}
                    <h1>{section.title}</h1>
                </NewsSectionCard>
            ))}
        </NewsSectionsPreviewContainer>
    )
}

export default NewsSectionPreview
