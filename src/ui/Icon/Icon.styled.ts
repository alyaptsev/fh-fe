import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const IconWrapper = styled.span<{ iconSize: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${({ iconSize }) => {
    switch (iconSize) {
      case 's':
        return css`
          width: 16px;
          height: 16px;
        `;
      case 'm':
        return css`
          width: 24px;
          height: 24px;
        `;
      default:
        return '';
    }
  }}
`;

export const StyledObject = styled.object`
`;
