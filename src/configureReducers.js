const defaultHandler = state => state;
const createReducer = (initialState, actionHandlers) => (state = initialState, action) => {
    const handler = actionHandlers?.[action?.type] || actionHandlers?.default || defaultHandler;
    return handler(state, action);
};

export const configureReducers = modules => modules.reduce((accumulator, currentModule) => {
    const r = currentModule.getReducers(createReducer);
    return { ...accumulator, ...r };
}, {});