import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const { width } = Dimensions.get('screen');

export const imageSize = width - 140;

export const AnimatedImage = styled(Animated.Image)`
  width: ${imageSize}px;
  height: ${imageSize}px;
  resize-mode: contain;
  position: absolute;
`;
