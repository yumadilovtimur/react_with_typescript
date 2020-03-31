import produce from 'immer';

export const createMutateReducer = draftFunction => (state, action) => {
    return produce(state, draft => draftFunction(draft, action.payload, state));
};