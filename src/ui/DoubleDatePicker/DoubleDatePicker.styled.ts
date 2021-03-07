import styled from '@emotion/styled';

export const DoubleDatePickerWrapper = styled.div`
  display: inline-flex;
  position: relative;
  background: #fff;
  border: 1px solid #a0bcdb;
  border-radius: 6px;
  box-sizing: border-box;
  height: 40px;
  padding: 7px 11px 7px 35px;
  font-size: 15px;
  line-height: 24px;
  font-weight: 600;
`;

export const LeftIcon = styled.span`
  display: inline-flex;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translateY(-8px);
  left: 11px;
`;

export const LeftPicker = styled.div`
  width: 80px;
`;

export const RightPicker = styled.div`
  width: 95px;
`;

export const VerticalSeparator = styled.div`
  width: 1px;
  height: 24px;
  background: #c3dcf9;
  margin: 0 16px;
`;
