import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
`;

export const TopContainer = styled(SafeAreaView).attrs({ edges: ['top'] })``;

export const styles = StyleSheet.create({ map: { ...StyleSheet.absoluteFillObject } });
