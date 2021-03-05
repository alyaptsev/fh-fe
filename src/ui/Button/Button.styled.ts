import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { StyledButtonProps } from './Button.types';

// eslint-disable-next-line
export const StyledButton = styled.button<StyledButtonProps>`
  box-sizing: border-box;
  border-radius: 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 1px 7px;

  ${({ buttonTheme }) => {
    switch (buttonTheme) {
      case 'primary':
        return css`
          background: #0077ff;
          color: #fff;
        `;
      case 'outlined':
        return css`
          background: #f7fbff;
          border: 1px solid #dae9fa;
          color: #0071f3;
        `;
      default:
        return '';
    }
  }}

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case 'm':
        return css`
          font-size: 15px;
          font-weight: 700;
          line-height: 20px;
          height: 40px;
        `;
      case 'l':
        return css`
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          height: 48px;
        `;
      default:
        return '';
    }
  }}

  /* TODO: set custom focus */
  &:focus,
  &:focus * {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;
