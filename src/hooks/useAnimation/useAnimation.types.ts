export type OpenStatus = (
  'unmounted'
  | 'entering'
  | 'mounted'
  | 'exiting'
);

export interface UseAnimationOptions {
  enterAnimationName: string,
  exitAnimationName: string
}
