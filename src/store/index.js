/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { persistStore } from 'redux-persist';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSagas from './modules/rootSagas';
import reduxPersist from './modules/examples/reduxPersist';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reduxPersist(rootReducer),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSagas);

export const persistor = persistStore(store);
export default store;
