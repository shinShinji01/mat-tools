import { css } from '@emotion/react';
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
`;
