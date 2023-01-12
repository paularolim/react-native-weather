import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  width: 100%;
  padding-top: 24px;
`;

export const Container = styled(LinearGradient)`
  padding-bottom: 24px;
  border-radius: 24px;
`;

export const Header = styled(View)`
  justify-content: flex-end;
  align-items: flex-end;
  padding: 24px;
`;

export const HeaderInfo = styled(View)`
  align-items: center;
`;

export const Icon = styled(Image)`
  width: 110px;
  height: 104px;
  resize-mode: contain;
  position: absolute;
  margin-left: 24px;
`;

export const Temperature = styled(Text)`
  font-size: 56px;
  line-height: 56px;
  font-weight: bold;
  color: #EEEEEE;
`;

export const ThermalSensation = styled(Text)`
  font-size: 12px;
  line-height: 12px;
  font-weight: normal;
  color: #EEEEEE;
`;

export const Middle = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding: 0px 24px;
`;

export const MiddleInfo = styled(View)``;

export const Status = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  color: #EEEEEE;
`;

export const Date = styled(Text)`
  font-size: 12px;
  line-height: 18px;
  font-weight: normal;
  color: #EEEEEE;
`;

export const WindIcon = styled(Image)`
  width: 59px;
  height: 46px;
  resize-mode: contain;
  opacity: 0.5;
`;
