import { all } from 'redux-saga/effects';

export const configureSagas = (modules) => {
    const sagas = modules.reduce((list, currModule) => {
        if (currModule.getSagas) {
            return list.concat(currModule.getSagas());
        }
        return list;
    }, []);

    return function* () {
        yield all(sagas);
    };
};