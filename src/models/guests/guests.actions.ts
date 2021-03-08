import { guestsDomain } from './guests.domain';
import {
  SetAdultsEvent,
  SetChildrenEvent,
} from './guests.types';

export const addRoom = guestsDomain.createEvent();

export const removeRoom = guestsDomain.createEvent<string>();

export const setRoomAdults = guestsDomain.createEvent<SetAdultsEvent>();

export const setRoomChildren = guestsDomain.createEvent<SetChildrenEvent>();

export const setRoomChildAge = guestsDomain.createEvent();

export const deleteRoomChild = guestsDomain.createEvent();

export const resetGuests = guestsDomain.createEvent();
