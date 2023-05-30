/* eslint-disable import/no-extraneous-dependencies */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () => {
    // eslint-disable-next-line no-new, no-unused-vars
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
};

function* exampleRequest() {
    try {
        yield call(requisicao);
        yield put(actions.clicaBotaoSuccess());
    } catch (error) {
        yield put(actions.clicaBotaoFailure());
    }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
