export interface CounterProps {
  onChange: (value: number) => void,
  className?: string,
  value?: number,
  maxValue?: number,
  minValue?: number,
}
