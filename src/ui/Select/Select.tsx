import React from 'react';
import Icon from '@ui/Icon';
import {
  SelectWrapper,
  StyledSelect,
  Arrow,
} from './Select.styled';
import { SelectProps } from './Select.types';

const Select: React.FC<SelectProps> = ({
  onChange,
  options,
  value,
  placeholder,
  className,
}) => (
  <SelectWrapper className={className}>
    <StyledSelect
      value={value}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((option) => (
        <option value={option.value}>{option.title}</option>
      ))}
    </StyledSelect>
    <Arrow><Icon icon="down-arrow" size="m" /></Arrow>
  </SelectWrapper>
);

export default Select;
