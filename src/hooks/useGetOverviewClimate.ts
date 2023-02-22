/* eslint-disable no-console */
import { OPEN_WEATHER_API_KEY } from '@env';
import axios, { AxiosInstance } from 'axios';
import { useCallback, useState } from 'react';
import { GeolocationProps } from '../services/Geolocation';

const appid = OPEN_WEATHER_API_KEY;
const baseURL = 'https://api.openweathermap.org/data/2.5/';
const httpClient: AxiosInstance = axios.create({ baseURL, params: { appid } });
const headers = { 'Content-Type': 'application/json', Accept: 'application/json' };

interface OverviewInfo {
  temperature: number | null
  feelsLike: number | null
  description: string
  windSpeed: number | null
  humidity: number | null
  rain: number | null
}

interface Result {
  overviewInfo: OverviewInfo | null
  getOverview: (position: GeolocationProps | null) => void
  loadingOverview: boolean
}

export function useGetOverviewClimate(): Result {
  const [overviewInfo, setOverviewInfo] = useState<OverviewInfo | null>(null);
  const [loadingOverview, setLoadingOverview] = useState(true);

  const getOverview = useCallback((position: GeolocationProps | null) => {
    if (position && position.latitude && position.longitude) {
      httpClient.get(
        'weather',
        {
          headers,
          params: {
            lat: position.latitude,
            lon: position.longitude,
            units: 'metric',
            lang: 'pt_br',
          },
        },
      )
        .then(({ data }) => {
          setOverviewInfo({
            temperature: Number((data?.main?.temp as number || 0)?.toFixed(0)),
            feelsLike: Number((data?.main?.feels_like as number || 0)?.toFixed(0)),
            description: data?.weather?.[0]?.description || '',
            windSpeed: Number((data?.wind?.speed as number || 0)?.toFixed(0)),
            humidity: Number((data?.main?.humidity as number || 0)?.toFixed(0)),
            rain: Number((data?.rain?.['1h'] || data?.rain?.['3h'] as number || 0)?.toFixed(0)),
          });
          console.log(data);
          setLoadingOverview(false);
        }).catch((error) => {
          console.log(error);
          setLoadingOverview(false);
        });
    }
  }, []);

  return { getOverview, overviewInfo, loadingOverview };
}
