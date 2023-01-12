import { Image, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Solid = styled(View)`
  background-color: #ffffff;
  padding: 12px 10px;
  border-radius: 50px;
  align-items: center;
`;

export const Gradient = styled(LinearGradient)`
  padding: 12px 10px;
  border-radius: 50px;
  align-items: center;
`;

export const Icon = styled(Image)`
  width: 35px;
  height: 30px;
  resize-mode: contain;
`;

export const Day = styled(Text) <{ active: boolean }>`
  margin-top: 10px;
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  color: ${({ active }) => (active ? '#806EF8' : '#FFFFFF')};
`;

export const WeekDay = styled(Text) <{ active: boolean }>`
  margin-top: 3px;
  font-size: 14px;
  font-weight: normal;
  line-height: 14px;
  color: ${({ active }) => (active ? '#806EF8' : '#FFFFFF')};
`;

export const Hour = styled(Text) <{ active: boolean }>`
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: normal;
  line-height: 12px;
  color: ${({ active }) => (active ? '#FFFFFF' : '#806EF8')};
`;

export const Temperature = styled(Text) <{ active: boolean }>`
  margin-top: 12px;
  font-size: 12px;
  font-weight: normal;
  line-height: 12px;
  color: ${({ active }) => (active ? '#FFFFFF' : '#806EF8')};
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

    elevation: 24,
  },
  purpleShadow: { shadowColor: '#806EF8' },
});
