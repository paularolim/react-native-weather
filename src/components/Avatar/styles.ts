import { Image as RNImage, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { AvatarProps } from './types';

export const Image = styled(RNImage) <{ size: AvatarProps['size'] }>`
  width: ${({ theme, size }) => theme.avatar[size]}px;
  height: ${({ theme, size }) => theme.avatar[size]}px;
  resize-mode: contain;
  border-radius: 12px;
`;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
