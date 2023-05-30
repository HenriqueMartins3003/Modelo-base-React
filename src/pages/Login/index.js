/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import axios from '../../services/axios';
import * as examplesActions from '../../store/modules/examples/actions';

export default function Login() {
    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();
        dispatch(examplesActions.clicaBotaoRequest());
    }

    React.useEffect(() => {
        async function getData() {
            const response = await axios.get('/alunos');
            const { data } = response;
            console.log(data);
        }
        getData();
    }, []);

    return (
        <Container>
            <Title isRed={false}>
                Login
                <small> Faça seu Login:</small>
            </Title>
            <Paragrafo> Lorem ipsum kksakdl </Paragrafo>
            <button type="button" onClick={handleClick}>
                {' '}
                Enviar{' '}
            </button>
        </Container>
    );
}
