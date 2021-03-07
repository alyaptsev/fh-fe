import React from 'react';
import {
  IconWrapper,
  StyledObject,
} from './Icon.styled';
import { IconProps } from './Icon.types';
import icons from './icons';

const Icon: React.FC<IconProps> = ({
  icon,
  size = 's',
  className,
}) => (
  <IconWrapper
    iconSize={size}
    className={className}
  >
    <StyledObject
      type="image/svg+xml"
      data={icons[icon]}
    />
  </IconWrapper>
);

export default Icon;
