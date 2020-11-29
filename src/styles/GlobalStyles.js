import { createGlobalStyle } from 'styled-components';
import { primaryDarkColor } from '../config/colors'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${primaryDarkColor}
  }
`;