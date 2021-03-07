import icons from './icons';

type IconType = keyof typeof icons;

type IconSize = (
  's'
  | 'm'
);

export interface IconProps {
  icon: IconType,
  size?: IconSize,
  className?: string,
}
