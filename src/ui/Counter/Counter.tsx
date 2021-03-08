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
  onChange,
  minValue,
  maxValue,
}) => (
  <StyledCounter className={className}>
    <Button
      buttonTheme="outlined"
      onClick={() => onChange(value - 1)}
      disabled={value === minValue}
    >
      <Icon icon="minus" size="m" />
    </Button>

    <Value>{value}</Value>

    <Button
      buttonTheme="outlined"
      onClick={() => onChange(value + 1)}
      disabled={value === maxValue}
    >
      <Icon icon="plus" size="m" />
    </Button>
  </StyledCounter>
);

export default Counter;
