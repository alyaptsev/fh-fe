import React from 'react';
import Button from '@ui/Button';
import Icon from '@ui/Icon';
import {
  StyledCounter,
  Value,
} from './Counter.styled';
import { CounterProps } from './Counter.types';

const Counter: React.FC<CounterProps> = ({
  className,
  value = 1,
}) => (
  <StyledCounter className={className}>
    <Button buttonTheme="outlined">
      <Icon icon="minus" size="m" />
    </Button>

    <Value>{value}</Value>

    <Button buttonTheme="outlined">
      <Icon icon="plus" size="m" />
    </Button>
  </StyledCounter>
);

export default Counter;
