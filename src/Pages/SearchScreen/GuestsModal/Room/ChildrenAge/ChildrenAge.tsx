import React from 'react';
import Select from '@ui/Select';
import Icon from '@ui/Icon';
import {
  StyledChildrenAge,
  Title,
  DeleteButton,
} from './ChildrenAge.styled';
import { ChildrenAgeProps } from './ChildrenAge.types';

const childAges = new Array(18)
  .fill(null)
  .map((_, idx) => ({ title: idx.toString(), value: idx }));

const ChildrenAge: React.FC<ChildrenAgeProps> = ({
  title,
  age,
  idx,
  onDelete,
  onAge,
  className,
}) => (
  <StyledChildrenAge className={className}>
    <Title>{title}</Title>

    <Select
      value={age}
      options={childAges}
      placeholder="Age"
      onChange={(value) => onAge(idx, value as number)}
    />

    <DeleteButton onClick={() => onDelete(idx)}>
      <Icon icon="delete-red" size="m" />
    </DeleteButton>
  </StyledChildrenAge>
);

export default ChildrenAge;
