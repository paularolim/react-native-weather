import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-get-location';

import { GeolocationProps } from './types';

export async function getCurrentPosition(): Promise<GeolocationProps | null> {
  if (Platform.OS === 'android') {
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (!hasPermission) {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    }
  }

  const location = await Geolocation.getCurrentPosition({
    enableHighAccuracy: false,
    timeout: 2000,
  });
  return { latitude: location.latitude, longitude: location.longitude };
}
