import React from 'react';
import Modal from '@ui/Modal';
import Icon from '@ui/Icon';
import {
  GuestsModalWrapper,
  Header,
  CloseButton,
  Content,
  Footer,
  WideButton,
  IconInButton,
  StyledRoom,
} from './GuestsModal.styled';
import { GuestsModalProps } from './GuestsModal.types';

const GuestsModal: React.FC<GuestsModalProps> = ({
  isOpened,
  onClose,
}) => (
  <Modal isOpened={isOpened}>
    <GuestsModalWrapper>
      <Header>
        <CloseButton onClick={onClose}>
          <Icon
            icon="delete"
            size="m"
          />
        </CloseButton>
        Who is staying?
      </Header>

      <Content>
        <StyledRoom />
        <WideButton
          size="l"
          buttonTheme="outlined"
        >
          <IconInButton
            icon="plus"
            size="m"
          />
          Add room
        </WideButton>
      </Content>

      <Footer>
        <WideButton size="l">
          <IconInButton
            icon="search"
            size="m"
          />
          Search
        </WideButton>
      </Footer>
    </GuestsModalWrapper>
  </Modal>
);

export default GuestsModal;
