type SelectValue = string | number;

interface SelectOption {
  title: string,
  value: SelectValue
}

export interface SelectProps {
  onChange: (value: SelectValue) => void,
  options: Array<SelectOption>,
  value?: SelectValue,
  placeholder?: string,
  className?: string,
}
