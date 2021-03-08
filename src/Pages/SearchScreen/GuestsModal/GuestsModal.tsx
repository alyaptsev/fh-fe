import React from 'react';
import { useStore } from 'effector-react';
import Modal from '@ui/Modal';
import Icon from '@ui/Icon';
import {
  $rooms,
  $roomsCount,
  $guestsCount,
  resetGuests,
  addRoom,
} from '@models/guests';
import {
  GuestsModalWrapper,
  Header,
  CloseButton,
  Content,
  Footer,
  WideButton,
  IconInButton,
  StyledRoom,
  GuestsCounts,
} from './GuestsModal.styled';
import { GuestsModalProps } from './GuestsModal.types';

const GuestsModal: React.FC<GuestsModalProps> = ({
  isOpened,
  onClose,
}) => {
  const rooms = useStore($rooms);
  const roomsCount = useStore($roomsCount);
  const guestsCount = useStore($guestsCount);
  const counts = `${roomsCount} rooms • ${guestsCount} guests`;

  const onModalClose = () => {
    resetGuests();
    onClose();
  };

  const onAddRoomClick = () => addRoom();

  return (
    <Modal isOpened={isOpened}>
      <GuestsModalWrapper>
        <Header>
          <CloseButton onClick={onModalClose}>
            <Icon
              icon="delete"
              size="m"
            />
          </CloseButton>
          Who is staying?
        </Header>

        <Content>
          {rooms.map((room, idx) => (
            <StyledRoom
              key={room.title}
              id={room.title}
              removable={idx !== 0}
            />
          ))}
          <WideButton
            size="l"
            buttonTheme="outlined"
            onClick={onAddRoomClick}
            disabled={roomsCount >= 8}
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
            <GuestsCounts>{counts}</GuestsCounts>
          </WideButton>
        </Footer>
      </GuestsModalWrapper>
    </Modal>
  );
};

export default GuestsModal;
