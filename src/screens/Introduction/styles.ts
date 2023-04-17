import { Dimensions, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

const { width } = Dimensions.get('screen');

const strokeSize = 40;
const mainCircleSize = width + 100;
const mainCircleRadius = mainCircleSize / 2;

export const Container = styled(View)`
  flex: 1;
`;

export const TopContainer = styled(LinearGradient)`
  width: ${width}px;
  height: ${width}px;
  justify-content: center;
  align-items: center;
`;

export const MainCircle = styled(LinearGradient)`
  width: ${mainCircleSize}px;
  height: ${mainCircleSize}px;
  border-radius: ${mainCircleRadius}px;
  opacity: 0.2;
  padding: ${strokeSize}px;
`;

export const Circle = styled(LinearGradient) <{ index: number }>`
  width: ${({ index }) => mainCircleSize - strokeSize * 2 * index}px;
  height: ${({ index }) => mainCircleSize - strokeSize * 2 * index}px;
  border-radius: ${mainCircleRadius}px;
  padding: ${strokeSize}px;
`;

export const BottomSheet = styled(View)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  border-top-right-radius: 48px;
  border-top-left-radius: 48px;
  margin-top: -48px;
`;

export const IndicatorContainer = styled(View)`
  height: 48px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CarouselContainer = styled(View)`
  justify-content: center;
  align-items: center;
  width: ${width}px;
  height: 100%;
  padding: 0px 54px;
`;

export const CarouselTitle = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize['2xl']}px;
  line-height: ${({ theme }) => theme.fontSize['2xl']}px;
  color: ${({ theme }) => theme.colors.onBackground};
  font-weight: 700;
  text-align: center;
`;

export const CarouselDescription = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: ${({ theme }) => theme.fontSize.lg}px;
  color: ${({ theme }) => theme.colors.outline};
  margin-top: 16px;
  text-align: center;
`;
