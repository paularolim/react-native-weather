import { ImageSourcePropType } from 'react-native';
import { SharedValue } from 'react-native-reanimated';

export interface ImageProps {
  image: ImageSourcePropType;
  translateX: SharedValue<number>;
  size: number;
  index: number;
}
