export interface Person {
    readonly firstName: string,
    readonly lastName: string,
}

export type Id = string;

export interface Comment {
    readonly id: Id,
    readonly comment: string,
    readonly date: string,
    readonly likes: number,
    readonly author: Person,
}

export interface News {
    readonly id: Id,
    readonly name: string,
    readonly date: string,
    readonly category: string,
    readonly author: Person,
    readonly isBreaking: boolean,
    readonly comments: {
        readonly summ: number,
        readonly items: Comment[],
    },
}

export type Loader = boolean;

export interface NewsStore {
    newsList: News[],
    newsLoader: Loader,
    favoritesNews: News[],
}