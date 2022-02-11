import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle `
    :root {
        font-size: 12px;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #3f3f3f;
        color: white;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Open Sans', sans-serif;
    }

    a {
        cursor: pointer;
        text-decoration: none;
    }

    button {
        border: none;
    }
`;
