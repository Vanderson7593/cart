import { css } from '@emotion/react'

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 70%;
  }

  body {
    box-sizing: border-box;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex:1;
    background-color: #d1d8e5;
  }

  a {
    text-decoration: none;
    color: inherit;
    border-bottom-style: none;
    font-size:14pt;
    font-weight:500;
  }

  button {
    border: none;
    background-color: inherit;
  }

  body,
  select,
  button,
  input,
  textarea {
    font-family: 'Poppins', 'Open Sans', sans-serif;
  }
  
  input:focus,
  textarea:focus,
  button:focus,
  select:focus {
    outline: none;
  }
`
