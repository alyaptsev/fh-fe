import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { StyledInputProps } from './Input.types';

export const InputWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  background: #fff;
  border: 1px solid #a0bcdb;
  border-radius: 6px;
  font-size: 15px;
  line-height: 24px;
  padding: 7px 11px;

  ${({ hasLeftIcon }) => hasLeftIcon && css`
    padding-left: 35px;
  `}

  ${({ hasRightIcon }) => hasRightIcon && css`
    padding-right: 35px;
  `}

  /* TODO: set custom focus */
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #a3acb8;
  }
`;

const Icon = styled.span`
  display: inline-flex;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translateY(-8px);
`;

export const LeftIcon = styled(Icon)`
  left: 11px;
`;

export const RightIcon = styled(Icon)`
  right: 11px;
`;
