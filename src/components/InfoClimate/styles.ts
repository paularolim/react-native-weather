import { Image, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Wrapper = styled(View)`
  align-items: center;
`;

export const Solid = styled(View)`
  background-color: #EEEEEE;
  padding: 15px 12px;
  border-radius: 20px;
`;

export const Gradient = styled(LinearGradient)`
  padding: 15px 12px;
  border-radius: 20px;
`;

export const Icon = styled(Image)`
  width: 35px;
  height: 30px;
  resize-mode: contain;
`;

export const Label = styled(Text) <{ variant: 'solid' | 'gradient' }>`
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  color: ${({ variant }) => (variant === 'solid' ? '#000000' : '#EEEEEE')};
  margin-top: 8px;
`;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
