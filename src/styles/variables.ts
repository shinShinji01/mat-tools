import { css } from '@emotion/react';
import { colors } from './colors';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexCenterColumn = css`
  ${flexCenter};
  flex-direction: column;
`;

export const borderRadius = {
  smooth: '1.2rem',
  round: '100rem',
  circle: '50%',
};

export const space = {
  sm: '1.2rem',
  md: '2.4rem',
  lg: '3.2rem',
  xl: '4.8rem',
  xxl: '5.6rem',
};

export const height = {
  navigation: '4.8rem',
};

export const errorRed = css`
  color: ${colors.errorRed};
`;
