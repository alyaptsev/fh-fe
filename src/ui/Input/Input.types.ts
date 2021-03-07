import React from 'react';

export interface InputProps {
  className?: string,
  value?: string,
  placeholder?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
}

export interface StyledInputProps {
  hasLeftIcon: boolean,
  hasRightIcon: boolean,
}
