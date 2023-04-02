import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './components/Header';
import { CardDetails } from './components/CardDetails';
import { Location } from './components/Location';
import { useGetPosition } from '../../hooks/useGetPosition';
import { HomeProps } from './types';
import { HourDetails } from './components/HourDetails';

export function Home({ navigation }: HomeProps) {
  const theme = useTheme();

  const { getPosition, position, loadingPosition } = useGetPosition();

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  useEffect(getPosition, [getPosition]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={{ justifyContent: 'space-between', flex: 1 }}>
        <Header toggleDrawer={toggleDrawer} />
        <Location position={position} loadingPosition={loadingPosition} />
        <CardDetails position={position} loadingPosition={loadingPosition} />
        <View style={{ flex: 1 }} />
        <HourDetails position={position} loadingPosition={loadingPosition} />
      </View>
    </SafeAreaView>
  );
}
