import React, { useMemo } from 'react';
import { Dimensions } from 'react-native';
import { interpolate, useAnimatedStyle } from 'react-native-reanimated';

import { Container } from './styles';
import { IndicatorProps } from './types';

const { width } = Dimensions.get('screen');

export function Indicator({ size, index, translateX }: IndicatorProps) {
  const slideSizes = useMemo(() => Array.from({ length: size }).map((_, i) => i * width), [size]);

  const style = useAnimatedStyle(() => {
    const w = interpolate(
      translateX.value,
      slideSizes,
      slideSizes.map((_, i) => (index === i ? 30 : 10)),
    );
    return { width: w };
  }, []);

  return <Container style={style} />;
}
