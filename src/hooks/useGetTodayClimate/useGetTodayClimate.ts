import moment from 'moment';
import { useCallback, useMemo } from 'react';

import { useFetchWeatherApi } from '@hooks/useFetch';
import { GeolocationProps } from '@services/Geolocation';

import { ForecastResponse, TodayClimateInfo, UseGetTodayClimateReturn } from './types';

export function useGetTodayClimate(): UseGetTodayClimateReturn {
  const { data, error, fetch, loading } = useFetchWeatherApi<ForecastResponse>();

  const getTodayClimate = useCallback((position: GeolocationProps | null) => {
    if (position && position.latitude && position.longitude) {
      fetch({
        method: 'get',
        url: 'data/2.5/forecast',
        params: {
          lat: position.latitude,
          lon: position.longitude,
          units: 'metric',
          lang: 'pt_br',
          cnt: 9,
        },
      });
    }
  }, [fetch]);

  const todayClimateInfo = useMemo(() => {
    if (data) {
      let indexActive = 0;
      let minDiff: number | null = null;
      const currentHour = moment().unix() * 1000;

      const formatted: TodayClimateInfo[] = [];

      data.list?.forEach((item) => {
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

      return formatted;
    }
    return null;
  }, [data]);

  return {
    todayClimateInfo,
    loadingTodayClimate: loading,
    errorTodayClimate: error,
    getTodayClimate,
  };
}
