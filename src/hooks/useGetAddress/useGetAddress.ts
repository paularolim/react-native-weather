import { useCallback, useMemo } from 'react';
import { GeolocationProps } from '../../services/Geolocation';
import { UseGetAddressReturn, GeoReverseResponse } from './types';
import { useFetchGeoApi } from '../useFetch';

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
  }, []);

  const address = useMemo(() => {
    if ((data?.address?.city || data?.address?.town) && data?.address?.state) {
      const city = data.address.city || data.address.town || '';
      return `${city},\n${data.address.state}`;
    }
    return '';
  }, [data]);

  return { address, loadingAddress: loading, errorAddress: error, getAddress };
}
