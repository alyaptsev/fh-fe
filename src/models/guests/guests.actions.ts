import { guestsDomain } from './guests.domain';

export const addRoom = guestsDomain.createEvent();

export const removeRoom = guestsDomain.createEvent<string>();

export const setRoomAdults = guestsDomain.createEvent();

export const setRoomChildren = guestsDomain.createEvent();

export const setRoomChildAge = guestsDomain.createEvent();

export const deleteRoomChild = guestsDomain.createEvent();

export const resetGuests = guestsDomain.createEvent();
