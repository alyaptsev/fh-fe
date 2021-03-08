import styled from '@emotion/styled';
import ChildrenAge from './ChildrenAge';

export const StyledRoom = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid #eff2f6;
  margin-bottom: 22px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

export const RemoveButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #d83b3b;
  background: transparent;
  border: none;

  &:focus,
  &:focus * {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;

export const GuestCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-top: 16px;
`;

export const ChildrenAges = styled.div`
  margin-top: 8px;
  margin-left: 8px;
  padding-top: 8px;
  padding-left: 10px;
  border-left: 1px solid #eff2f6;
`;

export const StyledChildrenAge = styled(ChildrenAge)`
  &:not(:first-of-type) {
    margin-top: 12px;
  }
`;
