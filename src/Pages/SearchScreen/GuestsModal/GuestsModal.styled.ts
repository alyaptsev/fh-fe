import styled from '@emotion/styled';
import UIButton from '@ui/Button';
import UIIcon from '@ui/Icon';
import Room from './Room';

export const GuestsModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  height: 64px;
  box-shadow: 0px 0px 1px rgba(68, 80, 95, 0.08),
              0px 1px 4px rgba(68, 80, 95, 0.2);
`;

export const CloseButton = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-12px);

  &:focus,
  &:focus * {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: 0 16px;
  margin-top: 22px;
`;

export const Footer = styled.div`
  padding: 0 16px 32px 16px;
  margin-top: 22px;
`;

export const WideButton = styled(UIButton)`
  width: 100%;
`;

export const IconInButton = styled(UIIcon)`
  margin-right: 5px;
`;

export const StyledRoom = styled(Room)`
  margin-bottom: 22px;
`;
