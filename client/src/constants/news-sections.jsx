import {
    FaBriefcase,
    FaTv,
    FaNewspaper,
    FaHeartbeat,
    FaFlask,
    FaFlagCheckered,
    FaRobot
} from "react-icons/fa";

export const newsSections = [
    {
        language: "en",
        sections: [
            {
                title: "Business",
                route: "/section/business",
                icon: <FaBriefcase />,
            },
            {
                title: "Entertainment",
                route: "/section/entertainment",
                icon: <FaTv />,
            },
            {
                title: "General",
                route: "/section/general",
                icon: <FaNewspaper />,
            },
            {
                title: "Health",
                route: "/section/health",
                icon: <FaHeartbeat />,
            },
            {
                title: "Science",
                route: "/section/science",
                icon: <FaFlask />,
            },
            {
                title: "Sports",
                route: "/section/sports",
                icon: <FaFlagCheckered />,
            },
            {
                title: "Technology",
                route: "/section/technology",
                icon: <FaRobot />,
            },
        ]
    },
    {
        language: "es",
        sections: [
            {
                title: "Comercio",
                route: "/section/business",
                icon: <FaBriefcase />,
            },
            {
                title: "Entretenimiento",
                route: "/section/entertainment",
                icon: <FaTv />,
            },
            {
                title: "General",
                route: "/section/general",
                icon: <FaNewspaper />,
            },
            {
                title: "Salud",
                route: "/section/health",
                icon: <FaHeartbeat />,
            },
            {
                title: "Ciencia",
                route: "/section/science",
                icon: <FaFlask />,
            },
            {
                title: "Deportes",
                route: "/section/sports",
                icon: <FaFlagCheckered />,
            },
            {
                title: "Tecnologia",
                route: "/section/technology",
                icon: <FaRobot />,
            },
        ]
    },
];