import React from 'react';
import { useStoreMap } from 'effector-react';
import Counter from '@ui/Counter';
import {
  $rooms,
  removeRoom,
  setRoomAdults,
  setRoomChildren,
} from '@models/guests';
import {
  RemoveButton,
  StyledRoom,
  Title,
  GuestCounter,
  ChildrenAges,
  StyledChildrenAge,
} from './Room.styled';
import { RoomProps } from './Room.types';

const GUESTS_LIMIT = 5;

const Room: React.FC<RoomProps> = ({
  id,
  removable,
  className,
}) => {
  const room = useStoreMap({
    store: $rooms,
    keys: [id],
    fn: (rooms, [roomId]) => rooms.find(({ title }) => title === roomId),
  })!;

  const guestsCount = room.adults + room.children.length;

  const onRoomRemove = () => removeRoom(room.title);

  const onAdultChange = (value: number) => setRoomAdults({ id: room.title, value });

  const onChildrenChange = (value: number) => setRoomChildren({ id: room.title, value });

  const onChildDelete = (idx: number) => {};

  const onChildAge = (idx: number, age: number) => {};

  return (
    <StyledRoom className={className}>
      <Title>
        {room.title}
        {removable && <RemoveButton onClick={onRoomRemove}>Remove room</RemoveButton>}
      </Title>

      <GuestCounter>
        Adults
        <Counter
          value={room.adults}
          minValue={1}
          maxValue={guestsCount >= GUESTS_LIMIT ? room.adults : 5}
          onChange={onAdultChange}
        />
      </GuestCounter>

      <GuestCounter>
        Children
        <Counter
          value={room.children.length}
          minValue={0}
          maxValue={guestsCount >= GUESTS_LIMIT ? room.children.length : 3}
          onChange={onChildrenChange}
        />
      </GuestCounter>

      <ChildrenAges>
        <StyledChildrenAge
          idx={0}
          title="Child 1"
          onDelete={onChildDelete}
          onAge={onChildAge}
        />
        <StyledChildrenAge
          idx={1}
          title="Child 2"
          onDelete={onChildDelete}
          onAge={onChildAge}
        />
      </ChildrenAges>
    </StyledRoom>
  );
};

export default Room;
