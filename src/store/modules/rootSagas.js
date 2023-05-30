/* eslint-disable import/no-extraneous-dependencies */
import { all } from 'redux-saga/effects';

import examples from './examples/sagas';

export default function* rootSagas() {
    return yield all(examples);
}
