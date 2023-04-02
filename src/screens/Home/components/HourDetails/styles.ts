import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)``;

export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
`;

export const Today = styled(Text)`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize['2xl']}px;
  line-height: ${({ theme }) => theme.fontSize['2xl']}px;
  color: ${({ theme }) => theme.colors.onBackground};
`;
