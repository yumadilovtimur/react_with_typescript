export interface ICreateAction {
    (payload?: any): {
        type: string;
        payload: object;
    };
    toString: () => string;
    type: string;
}

export const createAction = (type: string, args = {}): ICreateAction => {
    const typeStr = `${type}`.toString();

    const actionCreator = (payload = args) => ({ type: typeStr, payload });

    actionCreator.toString = () => typeStr;
    actionCreator.type = typeStr;

    return actionCreator;
}

interface ICreateAsyncAction {
    request: ICreateAction,
    success: ICreateAction,
    error: ICreateAction,
}

export const createAsyncAction = (type: string, args = {}): ICreateAsyncAction => {
    return {
        request: createAction(`${type}.REQUEST`, args),
        success: createAction(`${type}.SUCCESS`, args),
        error: createAction(`${type}.ERROR`, args),
    };
}
