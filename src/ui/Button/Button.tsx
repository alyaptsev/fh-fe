import React from 'react';
import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  className,
  theme = 'primary',
  size = 'm',
  onClick,
  children,
}) => (
  <StyledButton
    className={className}
    buttonTheme={theme}
    buttonSize={size}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

export default Button;
