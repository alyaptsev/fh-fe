import React from 'react';
import Counter from '@ui/Counter';
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
  className,
}) => {
  const onAdultChange = (value: number) => {};

  const onChildrenChange = (value: number) => {};

  const onChildDelete = (idx: number) => {};

  const onChildAge = (idx: number, age: number) => {};

  return (
    <StyledRoom className={className}>
      <Title>
        Room 1
        <RemoveButton>Remove room</RemoveButton>
      </Title>

      <GuestCounter>
        Adults
        <Counter
          minValue={1}
          maxValue={5}
          onChange={onAdultChange}
        />
      </GuestCounter>

      <GuestCounter>
        Children
        <Counter
          minValue={0}
          maxValue={3}
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
