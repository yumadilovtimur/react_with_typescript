import { createStore, compose, combineReducers } from 'redux';

export const configureStore = ({ middleware, reducers, initState }) => {
    const appReducers = combineReducers({ ...reducers });

    const allReducers = (state, action) => {
        let nextState = state;
        if (action.type === '@@core/CLEAR_APP') {
            nextState = undefined;
        }
        return appReducers(nextState, action);
    };

    const enhancer = compose(...middleware);

    return createStore(
        allReducers,
        initState,
        enhancer,
    );
};