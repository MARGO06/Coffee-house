export interface ArticlesNews {
    status: string | number;
    totalResults: number;
    articles: [];
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface SourcesNews {
    status: string;
    sources: [];
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
