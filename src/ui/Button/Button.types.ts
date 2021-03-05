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
  theme?: ButtonTheme,
  size?: ButtonSize,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export interface StyledButtonProps {
  buttonTheme?: ButtonTheme,
  buttonSize?: ButtonSize
}
