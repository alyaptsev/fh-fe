import { guestsDomain } from './guests.domain';
import {
  setGuestsState,
  addRoom,
  removeRoom,
  setRoomAdults,
  setRoomChildren,
  setRoomChildAge,
  deleteRoomChild,
  resetGuests,
} from './guests.actions';
import { RoomsMap } from './guests.types';

const initialStore: RoomsMap = {
  'Room 1': {
    title: 'Room 1',
    adults: 1,
    children: [],
  },
};

export const $roomsMap = guestsDomain
  .createStore<RoomsMap>(initialStore)
  .on(setGuestsState, (_, serializedState) => serializedState
    .split('|')
    .map((room, idx) => {
      const [adults, serializedChildren] = room.split(':');
      const children = serializedChildren ? serializedChildren.split(',').map(Number) : [];

      return {
        title: `Room ${idx + 1}`,
        adults: Number(adults),
        children,
      };
    })
    .reduce((acc, room) => ({ ...acc, [room.title]: room }), {}))
  .on(addRoom, (state) => {
    const roomsCount = Object.keys(state).length;

    // Can't be more than 8 rooms
    if (roomsCount < 8) {
      const newRoomTitle = `Room ${roomsCount + 1}`;

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
  .on(setRoomChildAge, (state, payload) => {
    const room = state[payload.id];

    return {
      ...state,
      [room.title]: {
        ...room,
        children: room.children
          .slice(0, payload.idx)
          .concat(payload.value)
          .concat(room.children.slice(payload.idx + 1)),
      },
    };
  })
  .on(deleteRoomChild, (state, payload) => {
    const room = state[payload.id];

    return {
      ...state,
      [room.title]: {
        ...room,
        children: room.children
          .slice(0, payload.idx)
          .concat(room.children.slice(payload.idx + 1)),
      },
    };
  })
  .reset(resetGuests);

export const $rooms = $roomsMap.map((roomsMap) => Object.values(roomsMap));

export const $roomsCount = $rooms.map((rooms) => rooms.length);

export const $guestsCount = $rooms.map(
  (rooms) => rooms.reduce(
    (count, room) => count + room.adults + room.children.length,
    0,
  ),
);

export const $serializedGuests = $rooms.map(
  (rooms) => rooms.map((room) => {
    const adults = room.adults.toString();
    const children = room.children.join(',');

    return children ? adults.concat(':', children) : adults;
  }).join('|'),
);
