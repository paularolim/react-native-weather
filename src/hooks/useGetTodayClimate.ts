/* eslint-disable no-console */
import { useCallback, useState } from 'react';
import { OPEN_WEATHER_API_KEY } from '@env';
import axios, { AxiosInstance } from 'axios';
import moment from 'moment';
import { GeolocationProps } from '../services/Geolocation';

const appid = OPEN_WEATHER_API_KEY;
const baseURL = 'https://api.openweathermap.org/data/2.5/';
const httpClient: AxiosInstance = axios.create({ baseURL, params: { appid } });
const headers = { 'Content-Type': 'application/json', Accept: 'application/json' };

interface TodayClimateInfo {
  timestamp: number;
  hour: string;
  temp: string;
  active?: boolean
}

interface Result {
  todayClimateInfo: TodayClimateInfo[] | null;
  getTodayClimate: (position: GeolocationProps | null) => void;
  loadingTodayClimate: boolean;
}

export function useGetTodayClimate(): Result {
  const [todayClimateInfo, setTodayClimateInfo] = useState<TodayClimateInfo[] | null>(null);
  const [loadingTodayClimate, setLoadingTodayClimate] = useState(true);

  const getTodayClimate = useCallback((position: GeolocationProps | null) => {
    if (position && position.latitude && position.longitude) {
      httpClient.get(
        'forecast',
        {
          headers,
          params: {
            lat: position.latitude,
            lon: position.longitude,
            units: 'metric',
            lang: 'pt_br',
            cnt: 9,
          },
        },
      )
        .then(({ data }) => {
          let indexActive = 0;
          let minDiff: number | null = null;
          const currentHour = moment().unix() * 1000;

          const formatted: TodayClimateInfo[] = [];

          data?.list?.forEach((item) => {
            const time = moment(item.dt * 1000).format('LT');

            const formattedItem: TodayClimateInfo = {
              timestamp: item.dt * 1000,
              hour: time,
              temp: `${Number(item.main.temp).toFixed(0)}°C`,
            };
            formatted.push(formattedItem);
          });

          formatted.forEach((item, index) => {
            const diff = Math.abs(item.timestamp - currentHour);
            if (!minDiff || diff <= minDiff) {
              minDiff = diff;
              indexActive = index;
            }
          });

          formatted[indexActive].active = true;

          setTodayClimateInfo(formatted);
          setLoadingTodayClimate(false);
        })
        .catch((error) => {
          console.log(error);
          setLoadingTodayClimate(false);
        });
    }
  }, []);

  return { todayClimateInfo, loadingTodayClimate, getTodayClimate };
}
