/* eslint-disable no-console */
import axios, { AxiosInstance } from 'axios';
import { useCallback, useState } from 'react';
import { LOCATIONIQ_API_KEY } from '@env';
import { GeolocationProps } from '../services/Geolocation';

const apikey = LOCATIONIQ_API_KEY;
const baseURL = 'https://us1.locationiq.com/v1/reverse';
const httpClient: AxiosInstance = axios.create({ baseURL, params: { key: apikey } });

interface Result {
  address: string
  loadingAddress: boolean
  errorAddress: string
  getAddress: (position: GeolocationProps | null) => void
}

export function useGetAddress(): Result {
  const [address, setAddress] = useState('');
  const [loadingAddress, setLoadingAddress] = useState(true);
  const [errorAddress, setErrorAddress] = useState('');

  const getAddress = useCallback((position: GeolocationProps | null) => {
    if (position && position.latitude && position.longitude) {
      httpClient
        .get('', { headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, params: { lat: position.latitude, lon: position.longitude, format: 'json' } })
        .then(({ data }) => {
          console.log(data);
          if (data.address) {
            const city = data.address?.city || data.address?.town || '';
            setAddress(`${city},\n${data.address.state}`);
            setLoadingAddress(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setLoadingAddress(false);
          setErrorAddress(error?.message);
        });
    }
  }, []);

  return { address, loadingAddress, errorAddress, getAddress };
}
