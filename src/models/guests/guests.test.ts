import { fork, allSettled } from 'effector';
import { guestsDomain } from './guests.domain';
import { $rooms, $roomsMap, $roomsCount } from './guests.store';
import {
  setGuestsState,
  addRoom,
  setRoomAdults,
  setRoomChildren,
} from './guests.actions';

// NOTICE: there are few test cases. This made for example to show way to test effector.js store

describe('models.guests', () => {
  describe('setGuestsState', () => {
    it('should return state for one room with 3 adults', async () => {
      const scope = fork(guestsDomain);

      await allSettled(setGuestsState, {
        scope,
        params: '3',
      });

      expect(scope.getState($rooms)).toStrictEqual([{
        title: 'Room 1',
        adults: 3,
        children: [],
      }]);
    });

    it('should return state for one room with two adults and one children', async () => {
      const scope = fork(guestsDomain);

      await allSettled(setGuestsState, {
        scope,
        params: '2:4',
      });

      expect(scope.getState($rooms)).toStrictEqual([{
        title: 'Room 1',
        adults: 2,
        children: [4],
      }]);
    });

    it('should return state for one room with one adult and three children', async () => {
      const scope = fork(guestsDomain);

      await allSettled(setGuestsState, {
        scope,
        params: '1:0,13,16',
      });

      expect(scope.getState($rooms)).toStrictEqual([{
        title: 'Room 1',
        adults: 1,
        children: [0, 13, 16],
      }]);
    });

    it('should return state for two rooms', async () => {
      const scope = fork(guestsDomain);

      await allSettled(setGuestsState, {
        scope,
        params: '1:4,6|3',
      });

      expect(scope.getState($rooms)).toStrictEqual([
        {
          title: 'Room 1',
          adults: 1,
          children: [4, 6],
        },
        {
          title: 'Room 2',
          adults: 3,
          children: [],
        },
      ]);
    });
  });

  describe('addRoom', () => {
    it('should add new room', async () => {
      const scope = fork(guestsDomain);

      await allSettled(addRoom, {
        scope,
      });

      expect(scope.getState($rooms)).toStrictEqual([
        {
          title: 'Room 1',
          adults: 1,
          children: [],
        },
        {
          title: 'Room 2',
          adults: 1,
          children: [],
        },
      ]);
    });

    // need babel plugin from sid generation
    it.skip('should not add new rooms if limit reached', async () => {
      const scope = fork(guestsDomain, {
        values: {
          [$roomsMap.sid!]: {
            'Room 1': {},
            'Room 2': {},
            'Room 3': {},
            'Room 4': {},
            'Room 5': {},
            'Room 6': {},
            'Room 7': {},
            'Room 8': {},
          },
        },
      });

      expect(scope.getState($roomsCount)).toStrictEqual(8);

      await allSettled(addRoom, {
        scope,
      });

      expect(scope.getState($roomsCount)).toStrictEqual(8);
    });
  });

  describe('setRoomChildren', () => {
    it('should add child to room', async () => {
      const scope = fork(guestsDomain);

      await allSettled(setRoomChildren, {
        scope,
        params: {
          id: 'Room 1',
          value: 2,
        },
      });

      expect(scope.getState($rooms)).toStrictEqual([{
        title: 'Room 1',
        adults: 1,
        children: [0, 0],
      }]);
    });

    it('should not add child to room if limit reached', async () => {
      const scope = fork(guestsDomain);

      await allSettled(setRoomAdults, {
        scope,
        params: {
          id: 'Room 1',
          value: 5,
        },
      });

      expect(scope.getState($rooms)).toStrictEqual([{
        title: 'Room 1',
        adults: 5,
        children: [],
      }]);

      await allSettled(setRoomChildren, {
        scope,
        params: {
          id: 'Room 1',
          value: 1,
        },
      });

      expect(scope.getState($rooms)).toStrictEqual([{
        title: 'Room 1',
        adults: 5,
        children: [],
      }]);
    });
  });
});
