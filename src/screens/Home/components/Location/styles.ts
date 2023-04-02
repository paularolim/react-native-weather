import { Image, Text, View } from 'react-native';
import styled from 'styled-components/native';

import mapImg from '@assets/images/map.png';

export const Container = styled(View)`
  padding: 0px 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0px;
`;

export const Place = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  line-height: ${({ theme }) => theme.lineHeight.xl}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onBackground};
`;

export const DateText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  line-height: ${({ theme }) => theme.lineHeight.xs}px;
  color: ${({ theme }) => theme.colors.outline};
`;

export const PinImage = styled(Image).attrs({ source: mapImg })`
  width: 60px;
  height: 70px;
  resize-mode: contain;
`;

export const ErrorData = styled(View)`
  flex-direction: column;
`;

export const LoadingDataContainer = styled(View)`
  justify-content: space-between;
`;
