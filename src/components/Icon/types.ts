import { ColorValue } from 'react-native';

export type IconName =
  | 'arrow-right'
  | 'arrow-left'
  | 'arrow-right-alt'
  | 'menu'
  | 'position'
  | 'settings'
  | 'compass'
  | 'location'
  | 'graph';

export interface IconProps {
  name: IconName;
  fill?: ColorValue;
}
