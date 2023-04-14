import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';

import pin from '@assets/images/pin-sm.png';
import { Header } from '@components/Header';
import { useGetPosition } from '@hooks/useGetPosition';
import { GeolocationProps } from '@services/Geolocation';

import { Footer } from './components/Footer';
import { defaultPosition } from './mock';
import { Container, LoadingContainer, TopContainer, styles } from './styles';
import { MapProps } from './types';

export function Map({ navigation }: MapProps) {
  const [marker, setMarker] = useState<GeolocationProps | null>(null);

  const { getPosition, position, loadingPosition } = useGetPosition();

  const region: Region = useMemo(() => {
    if (marker && marker.latitude && marker.longitude) {
      return {
        ...defaultPosition,
        latitude: marker.latitude || 0,
        longitude: marker.longitude || 0,
      };
    }
    if (position) {
      return {
        ...defaultPosition,
        latitude: position.latitude || 0,
        longitude: position.longitude || 0,
      };
    }
    return defaultPosition;
  }, [marker, position]);

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  useEffect(getPosition, [getPosition]);

  if (loadingPosition) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <MapView
        showsUserLocation
        region={region}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        onPress={(event) => setMarker(event.nativeEvent.coordinate)}
      >
        {marker && marker?.latitude && marker?.longitude && (
          <Marker
            key="0"
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            image={pin}
          />
        )}
      </MapView>

      <TopContainer>
        <Header toggleDrawer={toggleDrawer} />
      </TopContainer>
      <Footer position={region} loadingPosition={loadingPosition} />
    </Container>
  );
}
