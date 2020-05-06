import { createGlobalStyle } from 'styled-components'

import HankrndboldWoff from './hankrnd-bold.woff';
import HankrndboldWoff2 from './hankrnd-bold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Hank Round Bold';
        src: local('Hank Round Bold'), local('HankRoundBold'),
        url(${HankrndboldWoff2}) format('woff2'),
        url(${HankrndboldWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
