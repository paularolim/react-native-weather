import Geolocation from 'react-native-get-location';
import { GeolocationProps } from './types';

export async function getCurrentPosition(): Promise<GeolocationProps | null> {
  const location = await Geolocation.getCurrentPosition({
    enableHighAccuracy: false,
    timeout: 2000,
  });
  return { latitude: location.latitude, longitude: location.longitude };
}
