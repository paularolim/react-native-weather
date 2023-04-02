import { AxiosRequestConfig } from 'axios';

export type UseFetchWeatherApiReturn<T> = {
  fetch: (params: AxiosRequestConfig) => void,
  loading: boolean,
  error: string,
  data: T | null
}
