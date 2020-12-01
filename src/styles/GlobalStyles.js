import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import { primaryColor, primaryDarkColor } from '../config/colors';

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

  .btn-primary {
    color: white;
    background-color: ${primaryColor};
    background-color: cutom-color;
    border-color: ${primaryColor};
    border-color: cutom-cor;
    background-image: none;
  }

  .btn-primary:focus, .btn-primary:hover {
    background-color: ${primaryColor};
    border-color: ${primaryColor};
    background-position: 0 -15px;
    box-shadow: none;
  }
  
  .btn-primary:hover {
    color: #fff;
    background-color: ${primaryColor};
  }

  .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
    color: #fff;
    background-color: ${primaryDarkColor};
    border-color: ${primaryDarkColor};
  }

  .btn-primary:not(:disabled):not(.disabled).active:focus, .btn-primary:not(:disabled):not(.disabled):active:focus, .show>.btn-primary.dropdown-toggle:focus {
    box-shadow: none;
  }

  .btn-primary.disabled, .btn-primary.disabled.active, .btn-primary.disabled.focus, .btn-primary.disabled:active, .btn-primary.disabled:focus, .btn-primary.disabled:hover, .btn-primary[disabled], .btn-primary[disabled].active, .btn-primary[disabled].focus, .btn-primary[disabled]:active, .btn-primary[disabled]:focus, .btn-primary[disabled]:hover, fieldset[disabled] .btn-primary, fieldset[disabled] .btn-primary.active, fieldset[disabled] .btn-primary.focus, fieldset[disabled] .btn-primary:active, fieldset[disabled] .btn-primary:focus, fieldset[disabled] .btn-primary:hover {
    background-color: #C3003A7A;
    background-image: none;
    border: none;
  }

  .btn-light {
    color: ${primaryColor};
    background-color: white;
    border-color: white;
  }

  .btn-light:hover {
    color: ${primaryColor};
    background-color: white;
    border-color: white;
  }

  .btn-link {
    font-weight: 400;
    color: ${primaryColor};
    background-color: white;
    border-color: white;
    text-decoration: none;
  }

  .btn-link:hover {
    color: ${primaryColor};
    background-color: white;
    border-color: white;
  }
`;