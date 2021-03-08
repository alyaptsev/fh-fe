import { guestsDomain } from './guests.domain';
import {
  addRoom,
  removeRoom,
  resetGuests,
} from './guests.actions';
import { RoomsMap } from './guests.types';

const initialStore: RoomsMap = {
  Room1: {
    title: 'Room1',
    adults: 1,
    children: [],
  },
};

export const $roomsMap = guestsDomain
  .createStore<RoomsMap>(initialStore)
  .on(addRoom, (state) => {
    const roomsCount = Object.keys(state).length;

    if (roomsCount < 8) {
      const newRoomTitle = `Room${roomsCount + 1}`;

      return {
        ...state,
        [newRoomTitle]: {
          title: newRoomTitle,
          adults: 1,
          children: [],
        },
      };
    }

    return state;
  })
  .on(removeRoom, (state, title) => {
    const { [title]: remove, ...rest } = state;

    return rest;
  })
  .reset(resetGuests);

export const $rooms = $roomsMap.map((roomsMap) => Object.values(roomsMap));
