export interface ArticlesNew {
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

export interface ArticlesNews {
    status: string | number;
    totalResults: number;
    articles: ArticlesNew[];
}

export interface SourcesNew {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface SourcesNews {
    status: string;
    sources: SourcesNew[];
}
