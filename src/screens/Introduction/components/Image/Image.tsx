import React, { useMemo } from 'react';
import { interpolate, useAnimatedStyle } from 'react-native-reanimated';

import { AnimatedImage, imageSize, width } from './styles';
import { ImageProps } from './types';

export function Image({ image, translateX, size, index }: ImageProps) {
  const slideSizes = useMemo(() => Array.from({ length: size }).map((_, i) => i * width), [size]);

  const style1 = useAnimatedStyle(() => {
    const imgSize = interpolate(
      translateX.value,
      slideSizes,
      slideSizes.map((item, i) => (i === index ? imageSize : 0)),
    );
    const opacity = interpolate(
      translateX.value,
      slideSizes,
      slideSizes.map((item, i) => (i === index ? 1 : 0)),
    );

    return { width: imgSize, height: imgSize, opacity };
  }, []);

  return <AnimatedImage source={image} style={style1} />;
}
