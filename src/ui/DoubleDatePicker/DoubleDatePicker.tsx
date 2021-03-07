import React from 'react';
import Icon from '@ui/Icon';
import {
  DoubleDatePickerWrapper,
  LeftIcon,
  VerticalSeparator,
  LeftPicker,
  RightPicker,
} from './DoubleDatePicker.styled';
import { DoubleDatePickerProps } from './DoubleDatePicker.types';

/**
 * Stub component
 */
const DoubleDatePicker: React.FC<DoubleDatePickerProps> = ({
  className,
}) => (
  <DoubleDatePickerWrapper className={className}>
    <LeftIcon>
      <Icon icon="calendar" />
    </LeftIcon>

    <LeftPicker>Check-in</LeftPicker>

    <VerticalSeparator />

    <RightPicker>Check-out</RightPicker>
  </DoubleDatePickerWrapper>
);

export default DoubleDatePicker;
