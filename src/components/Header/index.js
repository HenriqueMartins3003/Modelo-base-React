/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/';
import { Nav } from './styled';

export default function Header() {
    const botaoClicado = useSelector(
        (state) => state.exampleReducer.botaoClicado
    );

    return (
        <Nav>
            <Link to="/">
                {' '}
                <FaHome size={24} />{' '}
            </Link>
            <Link to="/login">
                {' '}
                <FaUserAlt size={24} />{' '}
            </Link>
            <Link to="/llnjk">
                {' '}
                <FaSignInAlt size={24} />{' '}
            </Link>
            {botaoClicado ? 'clicado' : 'não clicado'}
        </Nav>
    );
}
