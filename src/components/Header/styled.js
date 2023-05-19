/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
    background: ${primaryColor};
    padding: 20px;
    display: flex;
    aling-items: center;
    justify-content: center:

    a {
        color: #fff;
        margin: 0 10px 0;
        font-weight: bold;
    }
`;
