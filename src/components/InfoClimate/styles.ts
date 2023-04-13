import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  align-items: center;
`;

export const Solid = styled(View)`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 15px 12px;
  border-radius: ${({ theme }) => theme.radius.md}px;
`;

export const Gradient = styled(LinearGradient)`
  padding: 15px 12px;
  border-radius: ${({ theme }) => theme.radius.md}px;
`;

export const Icon = styled(Image)`
  width: 35px;
  height: 30px;
  resize-mode: contain;
`;

export const Label = styled(Text)<{ variant: 'solid' | 'gradient' }>`
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  line-height: ${({ theme }) => theme.fontSize.xs}px;
  font-weight: 700;
  color: ${({ theme, variant }) =>
    variant === 'solid' ? theme.colors.onBackground : theme.colors.background};
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
