import { Text, TouchableOpacity, View } from 'react-native';
import styled, { css } from 'styled-components';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Rounded = styled(View)<{ checked: boolean }>`
  width: 20px;
  height: 20px;

  border-radius: ${({ theme }) => theme.radius.xsm}px;

  ${({ checked }) => {
    if (checked) {
      return css`
        background-color: ${({ theme }) => theme.colors.secondary};
      `;
    }
    return css`
      border-width: 2px;
      border-color: ${({ theme }) => theme.colors.secondary};
    `;
  }}
`;

export const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.onBackground};
`;
