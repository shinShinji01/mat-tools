import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { css } from '@emotion/react';
import { flexCenterColumn, shadow } from './variables';
import { colors } from './colors';

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
    color: ${colors.orangeTextLight};
    background: linear-gradient(
      145deg,
      ${colors.grayBackground},
      ${colors.grayBackgroundSecondary} 85%
    );
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  #root {
    ${flexCenterColumn};
  }
`;
