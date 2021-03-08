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
