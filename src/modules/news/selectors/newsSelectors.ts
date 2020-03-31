import { createSelector } from 'reselect';
import * as types from '../types/newsTypes'

const newsSection = (state: { news: types.NewsStore }): types.NewsStore => state.news;

export const newsList = createSelector(newsSection, (section: types.NewsStore): types.News[] => section.newsList);
export const newsLoader = createSelector(newsSection, (section: types.NewsStore): types.Loader => section.newsLoader);
export const favoritesNews = createSelector(newsSection, (section: types.NewsStore): types.News[] => section.favoritesNews);
