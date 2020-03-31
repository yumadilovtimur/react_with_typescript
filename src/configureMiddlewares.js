import { applyMiddleware } from 'redux';

export const configureMiddlewares = (modules, ...customMiddleWares) => {
    const composerFuncs = [];
    const middlewares = [...customMiddleWares];

    modules.forEach((currModule) => {
        const moduleWares = currModule.getMiddlewares();
        if (moduleWares) {
            middlewares.push(...moduleWares);
        }
    });

    return [
        applyMiddleware(...middlewares.filter(s => !!s)),
        ...composerFuncs,
    ];
};