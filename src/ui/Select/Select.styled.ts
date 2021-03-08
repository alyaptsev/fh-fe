import styled from '@emotion/styled';

export const SelectWrapper = styled.div`
  display: inline-flex;
  position: relative;
  min-width: 100px;
`;

export const StyledSelect = styled.select`
  display: flex;
  align-items: center;
  padding: 10px 40px 10px 8px;
  background: #fff;
  border: 1px solid #bed2e9;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  width: 100%;

  -webkit-appearance: none;
  -moz-appearance: none;

  /* TODO: set custom focus */
  &:focus,
  &:focus * {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;

export const Arrow = styled.span`
  position: absolute;
  display: flex;
  right: 8px;
  top: 50%;
  transform: translateY(-12px);
  pointer-events: none;
`;
