/* eslint-disable import/no-extraneous-dependencies */
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducer) => {
    const persistedReducer = persistReducer(
        {
            key: 'React-Base',
            storage,
            whitelist: ['exampleReducer'],
        },
        reducer
    );
    return persistedReducer;
};
