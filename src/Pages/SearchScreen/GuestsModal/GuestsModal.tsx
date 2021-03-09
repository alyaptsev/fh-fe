import React from 'react';
import { useStore } from 'effector-react';
import Modal from '@ui/Modal';
import Icon from '@ui/Icon';
import {
  MAX_ROOMS_COUNT,
  $rooms,
  $roomsCount,
  $guestsCount,
  $serializedGuests,
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

  const onSubmit = () => {
    // TASK REQUIREMENTS: here we have serialized state and can set it to url
    console.log($serializedGuests.getState());
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
              // Can't remove first room
              removable={idx !== 0}
            />
          ))}
          <WideButton
            size="l"
            buttonTheme="outlined"
            onClick={onAddRoomClick}
            disabled={roomsCount >= MAX_ROOMS_COUNT}
          >
            <IconInButton
              icon="plus"
              size="m"
            />
            Add room
          </WideButton>
        </Content>

        <Footer>
          <WideButton
            size="l"
            onClick={onSubmit}
          >
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
