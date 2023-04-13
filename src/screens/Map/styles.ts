import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
`;

export const TopContainer = styled(SafeAreaView).attrs({ edges: ['top'] })``;

export const BottomContainer = styled(SafeAreaView).attrs({ edges: ['bottom'] })`
  position: absolute;
  bottom: 0;
  margin: 0px 24px;
`;

export const List = styled(FlatList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})``;
