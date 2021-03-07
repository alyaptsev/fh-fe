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
import GuestModal from '../GuestsModal';
import { SearchPanelProps } from './SearchPanel.types';

const SearchPanel: React.FC<SearchPanelProps> = ({
  className,
}) => {
  const [guestModalOpened, setGuestModalOpened] = React.useState(false);

  const openGuestModal = () => setGuestModalOpened(true);

  const closeGuestModal = () => setGuestModalOpened(false);

  return (
    <StyledSearchPanel className={className}>
      <Input
        placeholder="Type city, place, or hotel name"
        leftIcon={<Icon icon="map-point" />}
        rightIcon={<Icon icon="navigation" />}
      />

      <WidgetsContainer>
        <DoubleDatePicker />
        <CounterButton onClick={openGuestModal}>2</CounterButton>
      </WidgetsContainer>

      <Button>Search</Button>

      <GuestModal
        isOpened={guestModalOpened}
        onClose={closeGuestModal}
      />
    </StyledSearchPanel>
  );
};

export default SearchPanel;
