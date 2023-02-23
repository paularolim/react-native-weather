import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const Place = styled(Text)`
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  color: #1A1D26;
`;

export const DateText = styled(Text)`
  font-size: 12px;
  line-height: 18px;
  color: #8D8D8D;
`;

export const LoadingContainer = styled(View)`
  padding: 0px 24px;
  height: 82px;
  flex-direction: row;
  justify-content: space-between;
  margin: 32px 0px;
`;

export const LoadingDataContainer = styled(View)`
  justify-content: space-between;
`;
