const categoriesConsts = [
    { name: "Business", value: "business" },
    { name: "Entertainment", value: "entertainment" },
    { name: "General", value: "general" },
    { name: "Health", value: "health" },
    { name: "Science", value: "science" },
    { name: "Sports", value: "sports" },
    { name: "Technology", value: "technology" },
];

const countriesConsts = [
    { name: "United States", value: "us" },
    { name: "United Kingdom", value: "gb" },
    { name: "India", value: "in" },
    { name: "Australia", value: "au" },
    { name: "Canada", value: "ca" },
];

const sourcesConsts = [
    { name: "ABC News", value: "abc-news" },
    { name: "BBC News", value: "bbc-news" },
    { name: "CNN", value: "cnn" },
    { name: "Fox News", value: "fox-news" },
    { name: "Google News", value: "google-news" },
    { name: "The New York Times", value: "the-new-york-times" },
    { name: "The Washington Post", value: "the-washington-post" },
    { name: "Hacker News", value: "hacker-news" }
];

const sortConsts = [
    { name: "Relevancy", value: "relevancy" },
    { name: "Popularity", value: "popularity"},
    { name: "Published At", value: "publishedAt" },
];

const defaultEverythingFilters = {
    q: "",
    searchIn: "",
    sources: "",
    domains: "",
    excludeDomains: "",
    from: "",
    to: "",
    page: 1,
    pageSize: 15,
    language: "en",
    sortBy: "publishedAt",
};

const defaultTopHeadlines = {
    country: "",
    category: "",
    q: "",
    page: 1,
    pageSize: 15,
    sources: "",
};

const languageConsts = [
    { name: "English", value: "en" },
    { name: "Spanish", value: "es" },
    { name: "French", value: "fr" }
];

const domains = [
    { value: "bbc.co.uk", name: "BBC" },
    { value: "cnn.com", name: "CNN" },
    { value: "nytimes.com", name: "New York Times" },
    { value: "techcrunch.com", name: "TechCrunch" },
    { value: "theverge.com", name: "The Verge" },
];

export const FilterConsts = {
    countries: countriesConsts,
    categories: categoriesConsts,
    sources: sourcesConsts,
    sortBy: sortConsts,
    defaultEverything: defaultEverythingFilters,
    defaultTopHeadlines: defaultTopHeadlines,
    languages: languageConsts,
    domains,
};
