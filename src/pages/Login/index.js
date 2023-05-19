import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
    return (
        <Container>
            <Title isRed={false}>
                Login
                <small> Faça seu Login:</small>
            </Title>
            <Paragrafo> Lorem ipsum kksakdl </Paragrafo>
            <button type="button"> Enviar </button>
        </Container>
    );
}
