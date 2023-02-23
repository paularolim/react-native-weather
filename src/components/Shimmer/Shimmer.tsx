import React, { useEffect } from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { ShimmerProps } from './types';

export function Shimmer({ height = 0, width = 0, radius = 0 }: ShimmerProps) {
  const rotation = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      rotation.value,
      [0, 1, 0],
      ['#ededed', '#e2e2e2', '#ededed'],
    );
    return { backgroundColor };
  });

  const handleAnimate = () => {
    rotation.value = withRepeat(withTiming(1, { duration: 700 }), -1, true);
  };

  useEffect(() => {
    handleAnimate();
  }, []);

  return (
    <Animated.View
      style={[
        {
          height: height !== 0 ? height : '100%',
          width: width !== 0 ? width : '100%',
          borderRadius: radius,
        },
        style,
      ]}
    />
  );
}
