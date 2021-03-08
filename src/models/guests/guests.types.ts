export interface RoomType {
  title: string,
  adults: number,
  children: Array<number>,
}

export interface RoomsMap {
  [id: string]: RoomType
}

export interface SetAdultsEvent {
  id: string,
  value: number,
}

export interface SetChildrenEvent {
  id: string,
  value: number,
}

export interface SetRoomChildAgeEvent {
  id: string,
  idx: number,
  value: number,
}

export interface DeleteRoomChildEvent {
  id: string,
  idx: number,
}
