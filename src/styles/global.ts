import { css } from '@emotion/react';
import { colors } from './colors';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: aliceblue;
  }

  #root {
    display: flex;
    justify-content: center;
  }
`;

export const errorRed = css`
  color: ${colors.errorRed};
`;
