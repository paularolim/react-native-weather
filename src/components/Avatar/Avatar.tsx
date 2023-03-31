import React from 'react';
import { Image, styles } from './styles';
import { AvatarProps } from './types';

export function Avatar({ hasShadow = false, style, ...rest }: AvatarProps) {
  return <Image style={[hasShadow && styles.shadow, style]} {...rest} />;
}
