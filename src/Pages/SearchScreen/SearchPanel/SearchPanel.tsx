import React from 'react';
import { useStore } from 'effector-react';
import Icon from '@ui/Icon';
import CounterButton from '@ui/CounterButton';
import DoubleDatePicker from '@ui/DoubleDatePicker';
import {
  $guestsCount,
  setGuestsState,
} from '@models/guests';
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
  const guestsCount = useStore($guestsCount);

  const openGuestModal = () => setGuestModalOpened(true);

  const closeGuestModal = () => setGuestModalOpened(false);

  React.useEffect(() => {
    // TASK REQUIREMENTS: here we can set state from url
    setGuestsState('1');
  }, []);

  return (
    <StyledSearchPanel className={className}>
      <Input
        placeholder="Type city, place, or hotel name"
        leftIcon={<Icon icon="map-point" />}
        rightIcon={<Icon icon="navigation" />}
      />

      <WidgetsContainer>
        <DoubleDatePicker />
        <CounterButton onClick={openGuestModal}>{guestsCount}</CounterButton>
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
