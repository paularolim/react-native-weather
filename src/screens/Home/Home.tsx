import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Header } from './components/Header';
import { CardDetails } from './components/CardDetails';
import { Location } from './components/Location';
import { useGetPosition } from '../../hooks/useGetPosition';
import { HomeProps } from './types';

export function Home({ navigation }: HomeProps) {
  const { getPosition, position, loadingPosition } = useGetPosition();

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  useEffect(() => {
    getPosition();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ justifyContent: 'space-between', flex: 1 }}>
        <Header toggleDrawer={toggleDrawer} />
        <Location position={position} loadingPosition={loadingPosition} />
        <CardDetails position={position} loadingPosition={loadingPosition} />
        <View style={{ flex: 1 }} />
      </View>
    </SafeAreaView>
  );
}
