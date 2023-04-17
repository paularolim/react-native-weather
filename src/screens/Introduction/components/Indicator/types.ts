import { SharedValue } from 'react-native-reanimated';

export interface IndicatorProps {
  index: number;
  size: number;
  translateX: SharedValue<number>;
}
