/* eslint-disable no-console */
import axios, { AxiosInstance } from 'axios';
import { useCallback, useState } from 'react';
import { GeolocationProps } from '../services/Geolocation';

const baseURL = 'https://services.gisgraphy.com/reversegeocoding';
const httpClient: AxiosInstance = axios.create({ baseURL });

interface Result {
  address: string
  loadingAddress: boolean
  getAddress: (position: GeolocationProps | null) => void
}

export function useGetAddress(): Result {
  const [address, setAddress] = useState('');
  const [loadingAddress, setLoadingAddress] = useState(true);

  const getAddress = useCallback((position: GeolocationProps | null) => {
    if (position && position.latitude && position.longitude) {
      const url = `/search?&lat=${position.latitude}&lng=${position.longitude}&format=json`;
      httpClient
        .get(url)
        .then(({ data }) => {
          if (data.result[0].city && data.result[0].state) {
            setAddress(`${data.result[0].city},\n${data.result[0].state}`);
            setLoadingAddress(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setLoadingAddress(false);
        });
    }
  }, []);

  return { address, loadingAddress, getAddress };
}
