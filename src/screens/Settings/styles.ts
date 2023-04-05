import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Container = styled(View)`
  padding: 24px;
`;

export const SectionTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.onBackground};
  margin-bottom: 5px;
  font-weight: 700;
`;
