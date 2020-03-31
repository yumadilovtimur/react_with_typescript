import * as actions from '../actions/newsActions';
import { createMutateReducer } from '../../../common/helpers/createMutateReducer';
import * as types from '../types/newsTypes'

export const initialState: types.NewsStore = {
    newsList: [],
    newsLoader: false,

    favoritesNews: [],
};

export const actionHandlers = {
    [actions.loadNews.request.type]: createMutateReducer((draft: types.NewsStore): void => {
        draft.newsLoader = true;
    }),
    [actions.loadNews.success.type]: createMutateReducer((draft: types.NewsStore, payload: types.News[]): void => {
        draft.newsList = payload;
        draft.newsLoader = false;
    }),
    [actions.loadNews.error.type]: createMutateReducer((draft: types.NewsStore): void => {
        draft.newsLoader = false;
    }),

    [actions.addToFavorites.type]: createMutateReducer((draft: types.NewsStore, payload: types.Id): void => {
        const newFavorite = draft.newsList.find(item => item.id === payload);
        if (newFavorite) draft.favoritesNews.push(newFavorite);
    }),
};