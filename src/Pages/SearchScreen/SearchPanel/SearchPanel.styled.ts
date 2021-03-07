import styled from '@emotion/styled';
import UIInput from '@ui/Input';
import UIButton from '@ui/Button';

export const StyledSearchPanel = styled.div`
  padding: 8px 12px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 1px rgba(68, 80, 95, 0.08),
              0px 1px 4px rgba(68, 80, 95, 0.2);
`;

export const Input = styled(UIInput)`
  width: 100%;
`;

export const WidgetsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

export const Button = styled(UIButton)`
  width: 100%;
  margin-top: 12px;
`;
