/* eslint-disable no-console */
import { useCallback, useState } from 'react';
import { GeolocationProps, getCurrentPosition } from '../services/Geolocation';

export interface GetPositionOut {
  position: GeolocationProps | null
  getPosition: () => void
  loadingPosition: boolean
}

export function useGetPosition(): GetPositionOut {
  const [position, setPosition] = useState<GeolocationProps | null>(null);
  const [loadingPosition, setLoadingPosition] = useState(true);

  const getPosition = useCallback(() => {
    getCurrentPosition()
      .then((pos) => {
        setPosition(pos);
        setLoadingPosition(false);
      })
      .catch((reason) => {
        console.log(reason);
        setLoadingPosition(false);
      });
  }, []);

  return { position, getPosition, loadingPosition };
}
