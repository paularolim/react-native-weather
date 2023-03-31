import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient)`
  padding: 0px 24px;
  flex: 1;
`;

export const Name = styled(Text)`
  color: #1A1D26;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  margin-top: 52px;
`;

export const Email = styled(Text)`
  color: #8D8D8D;
  font-size: 12px;
  line-height: 18px;
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
