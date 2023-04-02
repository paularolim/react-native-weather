import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  width: 100%;
  padding-top: 24px;
`;

export const Container = styled(LinearGradient)`
  padding-bottom: 24px;
  border-radius: ${({ theme }) => theme.radius.lg}px;
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
  font-size: ${({ theme }) => theme.fontSize['6xl']}px;
  line-height: ${({ theme }) => theme.lineHeight['6xl']}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.surfaceVariant};
`;

export const ThermalSensation = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  line-height: ${({ theme }) => theme.fontSize.xs}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.surfaceVariant};
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
  font-size: ${({ theme }) => theme.fontSize.base}px;
  line-height: ${({ theme }) => theme.fontSize.base}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.surfaceVariant};
`;

export const Date = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  line-height: ${({ theme }) => theme.fontSize.xs}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.surfaceVariant};
`;

export const WindIcon = styled(Image)`
  width: 59px;
  height: 46px;
  resize-mode: contain;
  opacity: 0.5;
`;
