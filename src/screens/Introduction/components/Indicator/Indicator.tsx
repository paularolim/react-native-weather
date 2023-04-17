import React, { useMemo } from 'react';
import { Dimensions } from 'react-native';
import { interpolate, interpolateColor, useAnimatedStyle } from 'react-native-reanimated';

import { colors } from '@styles/theme/colors';

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

    const bg = interpolateColor(
      translateX.value,
      slideSizes,
      slideSizes.map((_, i) => (index === i ? colors.secondary[30] : colors.secondary[80])),
    );

    return { width: w, backgroundColor: bg };
  }, []);

  return <Container style={style} />;
}
