/* eslint-disable no-console */
import { OPEN_WEATHER_API_KEY } from '@env';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { useCallback, useState } from 'react';
import { UseFetchApiReturn } from './types';

const appid = OPEN_WEATHER_API_KEY;
const baseURL = 'https://api.openweathermap.org/';
const httpClient: AxiosInstance = axios.create({ baseURL, params: { appid } });
const headers = { 'Content-Type': 'application/json', Accept: 'application/json' };

export function useFetchWeatherApi<T>(): UseFetchApiReturn<T> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<T | null>(null);

  const fetch = useCallback((params: AxiosRequestConfig) => {
    setLoading(true);

    httpClient({
      headers,
      ...params,
    }).then(({ data: _data }: { data: T }) => {
      setData(_data);
      setError('');
      setLoading(false);
    }).catch((_error) => {
      console.log(_error);
      setData(null);
      setError(_error?.message);
      setLoading(false);
    });
  }, []);

  return { fetch, loading, error, data };
}
