import { css } from '@emotion/react';
import { colors } from './colors';
import { hexToRgb } from '../utils/utils';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexCenterColumn = css`
  ${flexCenter};
  flex-direction: column;
`;

export const gridTwoCols = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const borderRadius = {
  smooth: '2.4rem',
  round: '100rem',
  circle: '50%',
};

export const space = {
  sm: '1.2rem',
  md: '2.4rem',
  lg: '3.2rem',
  xl: '4.8rem',
  xxl: '5.6rem',
  ultra: '7.2rem',
};

export const height = {
  navigation: '4.8rem',
};

export const shadow = {
  focus: `0 0 2rem 1rem rgba(${hexToRgb(colors.orangeLight)}, 0.5)`,
  inset: '0 0.2rem 1.2rem 1rem rgba(0,0,0,0.12)',
  normal: '0 1rem 1.2rem 0.2rem rgba(0,0,0,0.2)',
};

export const dividers = {
  orange: css`
    padding-bottom: ${space.md};
    border-bottom: 0.1rem solid ${colors.dividerOrangeLight};
  `,
};

export const inputsBase = css`
  padding: ${space.sm} ${space.md};
  margin-right: ${space.sm};
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  color: ${colors.orange};
  text-align: center;
  text-shadow: 0 0 0.15rem ${colors.orangeLight};
  border: none;
  border-radius: ${borderRadius.round};
  background-color: rgba(${hexToRgb(colors.grayBackground)}, 0.6);
  box-shadow: inset ${shadow.inset};
`;

export const errorRed = css`
  color: ${colors.red};
`;
