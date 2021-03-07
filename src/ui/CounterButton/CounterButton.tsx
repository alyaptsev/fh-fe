import React from 'react';
import Icon from '@ui/Icon';
import {
  StyledCounterButton,
  LeftIcon,
} from './CounterButton.styled';
import { CounterButtonProps } from './CounterButton.types';

const CounterButton: React.FC<CounterButtonProps> = ({
  className,
  onClick,
  children,
}) => (
  <StyledCounterButton
    className={className}
    onClick={onClick}
  >
    <LeftIcon><Icon icon="customers" /></LeftIcon>
    {children}
  </StyledCounterButton>
);

export default CounterButton;
