import { AxiosRequestConfig } from 'axios';

export type UseFetchApiReturn<T> = {
  fetch: (params: AxiosRequestConfig) => void,
  loading: boolean,
  error: string,
  data: T | null
}
