import Geolocation, { GeolocationError, GeolocationResponse } from '@react-native-community/geolocation';

interface GeolocationProps {
  latitude: number | null;
  longitude: number | null;
}

export function getCurrentPosition(): GeolocationProps | null {
  let data: GeolocationProps | null = null;

  const onSuccess = (position: GeolocationResponse) => {
    // console.log(position);
    data = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
  };
  const onError = (error: GeolocationError) => {
    console.error(error);
  };

  Geolocation.getCurrentPosition(onSuccess, onError);

  return data;
}
