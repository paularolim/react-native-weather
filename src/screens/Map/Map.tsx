import React, { useEffect, useMemo } from 'react';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';

import { Header } from '@components/Header';
import { useGetPosition } from '@hooks/useGetPosition';

import { Footer } from './components/Footer';
import { defaultPosition } from './mock';
import { Container, TopContainer, styles } from './styles';
import { MapProps } from './types';

export function Map({ navigation }: MapProps) {
  const { getPosition, position, loadingPosition } = useGetPosition();

  const region: Region = useMemo(() => {
    if (!loadingPosition && position) {
      return {
        ...defaultPosition,
        latitude: position.latitude || 0,
        longitude: position.longitude || 0,
      };
    }
    return defaultPosition;
  }, [loadingPosition, position]);

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  useEffect(getPosition, [getPosition]);

  return (
    <Container>
      <MapView showsUserLocation region={region} provider={PROVIDER_GOOGLE} style={styles.map} />

      <TopContainer>
        <Header toggleDrawer={toggleDrawer} />
      </TopContainer>
      <Footer position={position} loadingPosition={loadingPosition} />
    </Container>
  );
}
