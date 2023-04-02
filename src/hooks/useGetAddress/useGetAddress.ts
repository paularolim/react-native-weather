import { useCallback, useMemo } from 'react';

import { useFetchGeoApi } from '@hooks/useFetch';
import { GeolocationProps } from '@services/Geolocation';

import { GeoReverseResponse, UseGetAddressReturn } from './types';

export function useGetAddress(): UseGetAddressReturn {
  const { data, error, fetch, loading } = useFetchGeoApi<GeoReverseResponse>();

  const getAddress = useCallback((position: GeolocationProps | null) => {
    if (position && position.latitude && position.longitude) {
      fetch({
        method: 'get',
        url: 'reverse',
        params: {
          lat: position.latitude,
          lon: position.longitude,
          format: 'json',
        },
      });
    }
  }, [fetch]);

  const address = useMemo(() => {
    if ((data?.address?.city || data?.address?.town) && data?.address?.state) {
      const city = data.address.city || data.address.town || '';
      return `${city},\n${data.address.state}`;
    }
    return '';
  }, [data?.address?.city, data?.address?.state, data?.address?.town]);

  return { address, loadingAddress: loading, errorAddress: error, getAddress };
}
