import React from 'react';

type ButtonTheme = (
  'primary'
  | 'outlined'
  | 'transparent'
);

type ButtonSize = (
  'l'
  | 'm'
  | 's'
);

export interface ButtonProps {
  className?: string,
  buttonTheme?: ButtonTheme,
  size?: ButtonSize,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean,
}

export interface StyledButtonProps {
  buttonTheme?: ButtonTheme,
  buttonSize?: ButtonSize
}
