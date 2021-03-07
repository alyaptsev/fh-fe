import React from 'react';
import {
  InputWrapper,
  StyledInput,
  LeftIcon,
  RightIcon,
} from './Input.styled';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = ({
  className,
  value,
  onChange,
  placeholder,
  leftIcon,
  rightIcon,
}) => (
  <InputWrapper className={className}>
    <StyledInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      hasLeftIcon={Boolean(leftIcon)}
      hasRightIcon={Boolean(rightIcon)}
    />
    {leftIcon && (
      <LeftIcon>{leftIcon}</LeftIcon>
    )}
    {rightIcon && (
      <RightIcon>{rightIcon}</RightIcon>
    )}
  </InputWrapper>
);

export default Input;
