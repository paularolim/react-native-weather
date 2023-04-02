import React from 'react';
import { View } from 'react-native';

import { Image, styles } from './styles';
import { AvatarProps } from './types';

export function Avatar({ hasShadow = false, size, ...rest }: AvatarProps) {
  return (
    <View style={[hasShadow && styles.shadow]}>
      <Image size={size} {...rest} />
    </View>
  );
}
