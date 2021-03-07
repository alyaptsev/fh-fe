import React from 'react';
import Icon from '@ui/Icon';
import CounterButton from '@ui/CounterButton';
import DoubleDatePicker from '@ui/DoubleDatePicker';
import {
  StyledSearchPanel,
  Input,
  Button,
  WidgetsContainer,
} from './SearchPanel.styled';
import { SearchPanelProps } from './SearchPanel.types';

const SearchPanel: React.FC<SearchPanelProps> = ({
  className,
}) => (
  <StyledSearchPanel className={className}>
    <Input
      placeholder="Type city, place, or hotel name"
      leftIcon={<Icon icon="map-point" />}
      rightIcon={<Icon icon="navigation" />}
    />

    <WidgetsContainer>
      <DoubleDatePicker />
      <CounterButton>2</CounterButton>
    </WidgetsContainer>

    <Button>Search</Button>
  </StyledSearchPanel>
);

export default SearchPanel;
