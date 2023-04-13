import React, { useCallback, useEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';

import { BalloonClimate } from '@components/BallonClimate';
import { CardClimate } from '@components/CardClimate';
import { Header } from '@components/Header';
import { useGetPosition } from '@hooks/useGetPosition';

import { defaultPosition } from './mock';
import { BottomContainer, Container, List, TopContainer } from './styles';
import { MapProps } from './types';

const mapStyles = StyleSheet.create({ map: { ...StyleSheet.absoluteFillObject } });

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

  const Separator = useCallback(() => <View style={{ width: 12 }} />, []);

  useEffect(getPosition, [getPosition]);

  return (
    <Container>
      <MapView showsUserLocation region={region} provider={PROVIDER_GOOGLE} style={mapStyles.map} />

      <TopContainer>
        <Header toggleDrawer={toggleDrawer} />
      </TopContainer>
      <BottomContainer>
        <CardClimate variant="secondary" temperature="27°" thermalSensation="Sensação 32°">
          <List
            ItemSeparatorComponent={Separator}
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={() => (
              <BalloonClimate
                variant="hour"
                info={{ hour: '10:00', temperature: '27' }}
                hasShadow
              />
            )}
          />
        </CardClimate>
      </BottomContainer>
    </Container>
  );
}
