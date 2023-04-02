/* eslint-disable no-console */
import { LOCATIONIQ_API_KEY } from '@env';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { useCallback, useState } from 'react';
import { UseFetchApiReturn } from './types';

const apikey = LOCATIONIQ_API_KEY;
const baseURL = 'https://us1.locationiq.com/v1';
const httpClient: AxiosInstance = axios.create({ baseURL, params: { key: apikey } });
const headers = { 'Content-Type': 'application/json', Accept: 'application/json' };

export function useFetchGeoApi<T>(): UseFetchApiReturn<T> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<T | null>(null);

  const fetch = useCallback((params: AxiosRequestConfig) => {
    setLoading(true);

    httpClient({
      headers,
      ...params,
    })
      .then(({ data: _data }: { data: T }) => {
        setData(_data);
        setError('');
        setLoading(false);
      })
      .catch((_error) => {
        console.log(_error);
        setData(null);
        setError(_error?.message);
        setLoading(false);
      });
  }, []);

  return { fetch, loading, error, data };
}
