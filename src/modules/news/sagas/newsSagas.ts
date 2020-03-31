import {
    takeEvery, put, call, all, delay,
} from 'redux-saga/effects';
import * as actions from '../actions/newsActions';
import * as dataContext from '../dataProvider/newsDataContext';
import * as types from '../types/newsTypes'

function* loadNews() {
    try {
        yield delay(1000);
        const data: types.News[] = yield call(dataContext.loadNews);
        yield put(actions.loadNews.success(data));
    } catch (err) {
        yield put(actions.loadNews.error(err));
    }
}

export default function* () {
    yield all([
        yield takeEvery(actions.loadNews.request, loadNews),
    ]);
}