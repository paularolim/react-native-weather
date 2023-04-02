import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient)`
  padding: 0px 24px;
  flex: 1;
`;

export const Name = styled(Text)`
  color: ${({ theme }) => theme.colors.onBackground};
  font-size: ${({ theme }) => theme.fontSize['2xl']}px;
  line-height: ${({ theme }) => theme.fontSize['2xl']}px;
  font-weight: 700;
  margin-top: 52px;
`;

export const Email = styled(Text)`
  color: ${({ theme }) => theme.colors.outline};
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  line-height: ${({ theme }) => theme.fontSize.xs}px;
  font-weight: 400;
`;

export const Middle = styled(View)`
  margin-top: 32px;
  margin-bottom: 50px;
`;

export const BottomImage = styled(Image)`
  width: 253px;
  height: 215px;
  resize-mode: contain;
  position: absolute;
  bottom: -69px;
  left: -8px;
`;
