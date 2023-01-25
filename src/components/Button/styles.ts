import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled, { css } from 'styled-components/native';
import { ButtonContainerVariant } from './types';

export const Container = styled(TouchableOpacity) <{ format: ButtonContainerVariant }>`
  flex-direction: row;
  align-items: center;
  background-color: #FFFFFF;

  ${({ format }) => {
    if (format === 'square') {
      return css`
        border-radius: 12px;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
      `;
    }
    return '';
  }}
`;

export const Label = styled(Text) <{ color?: string, fontSize?: number, fontWeight?: 'normal' | 'bold' }>`
  font-size: ${({ fontSize }) => fontSize || 12}px;
  line-height: 18px;
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  color: ${({ color }) => color || '#000000'};
`;

export const ContainerGradient = styled(LinearGradient)`
  border-radius: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 24px;
`;

export const IconGradient = styled(LinearGradient)`
  border-radius: 15px;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;

export const IconContainer = styled(View)`
  padding: 0px 10px;
`;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
