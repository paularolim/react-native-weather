/* eslint-disable no-console */
import { useCallback } from 'react';
import { GeolocationProps } from '../../services/Geolocation';
import { useFetchWeatherApi } from '../useFetch';
import { UseGetOverviewClimateReturn, WeatherResponse } from './types';

export function useGetOverviewClimate(): UseGetOverviewClimateReturn {
  const { data, error, fetch, loading } = useFetchWeatherApi<WeatherResponse>();

  const getOverview = useCallback((position: GeolocationProps | null) => {
    if (position && position.latitude && position.longitude) {
      fetch({
        method: 'get',
        url: 'data/2.5/weather',
        params: {
          lat: position.latitude,
          lon: position.longitude,
          units: 'metric',
          lang: 'pt_br',
        },
      });
    }
  }, [fetch]);

  return {
    getOverview,
    overviewInfo: {
      temperature: Number((data?.main?.temp as number || 0)?.toFixed(0)),
      feelsLike: Number((data?.main?.feels_like as number || 0)?.toFixed(0)),
      description: data?.weather?.[0]?.description || '',
      windSpeed: Number((data?.wind?.speed as number || 0)?.toFixed(0)),
      humidity: Number((data?.main?.humidity as number || 0)?.toFixed(0)),
      rain: Number((data?.rain?.['1h'] || data?.rain?.['3h'] as number || 0)?.toFixed(0)),
    },
    loadingOverview: loading,
    errorOverview: error,
  };
}
