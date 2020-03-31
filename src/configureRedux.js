import createSagaMiddleware from 'redux-saga';
import { configureStore } from './configureStore';
import { configureMiddlewares } from './configureMiddlewares';
import { configureReducers } from './configureReducers';
import { configureSagas } from './configureSagas';

export const configureRedux = ({ modules, initState }) => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = configureMiddlewares(modules, sagaMiddleware);

    const store = configureStore({
        middleware,
        reducers: configureReducers(modules),
        initState,
    });

    function runSagas() {
        const task = sagaMiddleware.run(configureSagas(modules));
        task.toPromise().catch((error) => {
            console.error(error);
            runSagas();
            store.dispatch({ type: '@@core/GLOBAL_SAGA_ERROR', error });
        });
    }

    runSagas();

    return store;
};