import React from 'react';
import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  className,
  buttonTheme = 'primary',
  size = 'm',
  onClick,
  children,
}) => (
  <StyledButton
    className={className}
    buttonTheme={buttonTheme}
    buttonSize={size}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

export default Button;
