import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Solid = styled(View)`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 12px 10px;
  border-radius: ${({ theme }) => theme.radius.xlg}px;
  align-items: center;
`;

export const Gradient = styled(LinearGradient)`
  padding: 12px 10px;
  border-radius: ${({ theme }) => theme.radius.xlg}px;
  align-items: center;
`;

export const Icon = styled(Image)`
  width: 35px;
  height: 30px;
  resize-mode: contain;
`;

export const Day = styled(Text)<{ active: boolean }>`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fontSize['2xl']}px;
  line-height: ${({ theme }) => theme.fontSize['2xl']}px;
  /* TODO: apply theme */
  color: ${({ active }) => (active ? '#806EF8' : '#FFFFFF')};
  font-weight: bold;
`;

export const WeekDay = styled(Text)<{ active: boolean }>`
  margin-top: 3px;
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: ${({ theme }) => theme.fontSize.sm}px;
  /* TODO: apply theme */
  color: ${({ active }) => (active ? '#806EF8' : '#FFFFFF')};
  font-weight: normal;
`;

export const Hour = styled(Text)`
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  line-height: ${({ theme }) => theme.lineHeight.xs}px;
  color: ${({ theme }) => theme.colors.onSecondaryContainer};
  font-weight: 400;
`;

export const Temperature = styled(Text)`
  margin-top: 12px;
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  line-height: ${({ theme }) => theme.lineHeight.xs}px;
  color: ${({ theme }) => theme.colors.onSecondaryContainer};
  font-weight: 400;
`;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#00000040',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 8,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  purpleShadow: {
    shadowColor: '#5B47D1',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 8,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
});
