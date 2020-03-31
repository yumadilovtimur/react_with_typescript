import { createAction, createAsyncAction } from '../../../common/helpers/createActions';

export const loadNews = createAsyncAction('NEWS.LOAD_NEWS');
export const addToFavorites = createAction('NEWS.ADD_TO_FAVORITES');