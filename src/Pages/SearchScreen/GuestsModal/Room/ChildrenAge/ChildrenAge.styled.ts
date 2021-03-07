import styled from '@emotion/styled';

export const StyledChildrenAge = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  flex-grow: 1;
`;

export const DeleteButton = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  margin-left: 12px;

  object svg {
    fill: #d83b3b;
  }

  &:focus,
  &:focus * {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;
