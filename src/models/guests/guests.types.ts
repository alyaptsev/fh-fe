export interface RoomType {
  title: string,
  adults: number,
  children: Array<number>,
}

export interface RoomsMap {
  [id: string]: RoomType
}
