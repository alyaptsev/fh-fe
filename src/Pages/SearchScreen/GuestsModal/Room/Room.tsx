import React from 'react';
import { useStoreMap } from 'effector-react';
import Counter from '@ui/Counter';
import {
  MAX_ROOM_GUESTS,
  MIN_ADULTS_PER_ROOM,
  MAX_ADULTS_PER_ROOM,
  MIN_CHILDREN_PER_ROOM,
  MAX_CHILDREN_PER_ROOM,
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

  const roomGuestsCount = room.adults + room.children.length;
  const maxAdultsCount = roomGuestsCount >= MAX_ROOM_GUESTS
    ? room.adults
    : MAX_ADULTS_PER_ROOM;
  const maxChildrenCount = roomGuestsCount >= MAX_ROOM_GUESTS
    ? room.children.length
    : MAX_CHILDREN_PER_ROOM;

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
          minValue={MIN_ADULTS_PER_ROOM}
          maxValue={maxAdultsCount}
          onChange={onAdultChange}
        />
      </GuestCounter>

      <GuestCounter>
        Children
        <Counter
          value={room.children.length}
          minValue={MIN_CHILDREN_PER_ROOM}
          maxValue={maxChildrenCount}
          onChange={onChildrenChange}
        />
      </GuestCounter>

      {Boolean(room.children.length) && (
        <ChildrenAges>
          {room.children.map((age, idx) => (
            <StyledChildrenAge
              // useless but *required*
              // eslint-disable-next-line
              key={`child-${idx}`}
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
