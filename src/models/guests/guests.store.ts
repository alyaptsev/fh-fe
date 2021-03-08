import { guestsDomain } from './guests.domain';
import {
  addRoom,
  removeRoom,
  setRoomAdults,
  setRoomChildren,
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

    // Can't be more than 8 rooms
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
  .on(setRoomAdults, (state, payload) => {
    const room = state[payload.id];
    const newRoom = {
      ...room,
      adults: payload.value,
    };
    const guestsCount = newRoom.adults + newRoom.children.length;

    // Can't be more than 5 guests in room
    if (guestsCount > 5) return state;

    return {
      ...state,
      [room.title]: newRoom,
    };
  })
  .on(setRoomChildren, (state, payload) => {
    const room = state[payload.id];
    const newChildren = room.children.length < payload.value
      ? room.children.concat(new Array(payload.value - room.children.length).fill(0))
      : room.children.slice(0, payload.value);
    const newRoom = {
      ...room,
      children: newChildren,
    };
    const guestsCount = newRoom.adults + newRoom.children.length;

    // Can't be more than 5 guests in room
    if (guestsCount > 5) return state;

    return {
      ...state,
      [room.title]: {
        ...room,
        children: newChildren,
      },
    };
  })
  .reset(resetGuests);

export const $rooms = $roomsMap.map((roomsMap) => Object.values(roomsMap));
