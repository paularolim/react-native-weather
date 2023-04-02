import { GeolocationProps } from '../../services/Geolocation';

export interface GetPositionOut {
  position: GeolocationProps | null
  getPosition: () => void
  loadingPosition: boolean
}
