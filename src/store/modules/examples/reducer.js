/* eslint-disable no-console */
import * as types from '../types';

const initialState = {
    botaoClicado: false,
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
    switch (action.type) {
        case types.BOTAO_CLICADO_SUCCESS: {
            console.log('sucesso');
            const newState = { ...state };
            newState.botaoClicado = !newState.botaoClicado;
            return newState;
        }
        case types.BOTAO_CLICADO_REQUEST: {
            console.log('Estou escutando a requisicao');
            return state;
        }
        case types.BOTAO_CLICADO_FAILURE: {
            console.log('Deu erro');
            return state;
        }
        default:
            return state;
    }
};
