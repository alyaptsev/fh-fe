import React from 'react';
import { useStoreMap } from 'effector-react';
import Counter from '@ui/Counter';
import {
  $rooms,
  removeRoom,
  setRoomAdults,
  setRoomChildren,
  setRoomChildAge,
  deleteRoomChild,
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

  const onChildDelete = (idx: number) => deleteRoomChild({ id: room.title, idx });

  const onChildAge = (idx: number, value: number) => setRoomChildAge({
    id: room.title,
    idx,
    value: Number(value),
  });

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

      {Boolean(room.children.length) && (
        <ChildrenAges>
          {room.children.map((age, idx) => (
            <StyledChildrenAge
              idx={idx}
              age={age}
              title={`Child ${idx + 1}`}
              onDelete={onChildDelete}
              onAge={onChildAge}
            />
          ))}
        </ChildrenAges>
      )}

    </StyledRoom>
  );
};

export default Room;
