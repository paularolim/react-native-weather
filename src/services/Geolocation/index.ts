import Geolocation from 'react-native-get-location';

interface GeolocationProps {
  latitude: number | null;
  longitude: number | null;
}

export async function getCurrentPosition(): Promise<GeolocationProps | null> {
  const location = await Geolocation.getCurrentPosition({
    enableHighAccuracy: false,
    timeout: 2000,
  });
  return { latitude: location.latitude, longitude: location.longitude };
}
