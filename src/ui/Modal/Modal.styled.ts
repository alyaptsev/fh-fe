import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { FixedContainerProps } from './Modal.types';

export const modalEnter = keyframes`
  from {
    transform: translateX(100vw);
  }

  to {
    transform: translateX(0);
  }
`;

export const modalExit = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100vw);
  }
`;

export const FixedContainer = styled.div<FixedContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  overflow: auto;

  ${({ openStatus }) => {
    switch (openStatus) {
      case 'entering':
      case 'mounted':
        return css`
          animation: ${modalEnter} 200ms ease-in-out forwards;
        `;
      case 'exiting':
        return css`
          animation: ${modalExit} 200ms linear forwards;
        `;
      default:
        return '';
    }
  }}
`;
