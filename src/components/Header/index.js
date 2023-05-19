/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
    return (
        <Nav>
            <a href="https://google.com">
                {' '}
                <FaHome size={24} />{' '}
            </a>
            <a href="https://google.com">
                {' '}
                <FaUserAlt size={24} />{' '}
            </a>
            <a href="https://google.com">
                {' '}
                <FaSignInAlt size={24} />{' '}
            </a>
        </Nav>
    );
}
