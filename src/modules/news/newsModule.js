import ApplicationModule from '../ApplicationModule';
import { initialState, actionHandlers } from './reducers/newsReducers';
import sagas from './sagas/newsSagas';

class NewsModule extends ApplicationModule {
    getReducers(createReducer) {
        return {
            news: createReducer(initialState, actionHandlers),
        };
    }

    getSagas() {
        return sagas();
    }
}

export default new NewsModule();