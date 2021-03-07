import styled from '@emotion/styled';

export const StyledCounterButton = styled.button`
  display: inline-flex;
  position: relative;
  background: #fff;
  border: 1px solid #a0bcdb;
  border-radius: 6px;
  padding: 7px 11px 7px 35px;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;

  /* TODO: set custom focus */
  &:focus,
  &:focus * {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;

export const LeftIcon = styled.span`
  display: inline-flex;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 11px;
  transform: translateY(-8px);
`;
