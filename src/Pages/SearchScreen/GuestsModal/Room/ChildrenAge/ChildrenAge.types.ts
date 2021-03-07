export interface ChildrenAgeProps {
  title: string,
  idx: number,
  onDelete: (idx: number) => void,
  onAge: (idx: number, value: number) => void,
  className?: string,
  age?: number,
}
