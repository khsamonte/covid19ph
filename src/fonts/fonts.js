import { createGlobalStyle } from "styled-components";

import HelveticaWOFF from "./Helvetica.woff";
import HelveticaWOFF2 from "./Helvetica.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: 'Helvetica';
    src: local('Helvetica'), local('Helvetica'),
    url(${HelveticaWOFF}) format('woff2'),
    url(${HelveticaWOFF2}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
`;
