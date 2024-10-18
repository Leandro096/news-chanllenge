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
                route: "/categories/business",
                icon: <FaBriefcase />,
            },
            {
                title: "Entertainment",
                route: "/categories/entertainment",
                icon: <FaTv />,
            },
            {
                title: "General",
                route: "/categories/general",
                icon: <FaNewspaper />,
            },
            {
                title: "Health",
                route: "/categories/health",
                icon: <FaHeartbeat />,
            },
            {
                title: "Science",
                route: "/categories/science",
                icon: <FaFlask />,
            },
            {
                title: "Sports",
                route: "/categories/sports",
                icon: <FaFlagCheckered />,
            },
            {
                title: "Technology",
                route: "/categories/technology",
                icon: <FaRobot />,
            },
        ]
    },
    {
        language: "es",
        sections: [
            {
                title: "Comercio",
                route: "/categories/business",
                icon: <FaBriefcase />,
            },
            {
                title: "Entretenimiento",
                route: "/categories/entertainment",
                icon: <FaTv />,
            },
            {
                title: "General",
                route: "/categories/general",
                icon: <FaNewspaper />,
            },
            {
                title: "Salud",
                route: "/categories/health",
                icon: <FaHeartbeat />,
            },
            {
                title: "Ciencia",
                route: "/categories/science",
                icon: <FaFlask />,
            },
            {
                title: "Deportes",
                route: "/categories/sports",
                icon: <FaFlagCheckered />,
            },
            {
                title: "Tecnologia",
                route: "/categories/technology",
                icon: <FaRobot />,
            },
        ]
    },
];