import { GeolocationProps } from '../../services/Geolocation';

export interface GeoReverseResponse {
  'place_id': string,
  'licence': string,
  'osm_type': string,
  'osm_id': string,
  'lat': string,
  'lon': string,
  'display_name': string,
  'address': {
    'cafe': string,
    'road': string,
    'suburb': string,
    'county': string,
    'region': string,
    city: string,
    town: string
    'state': string,
    'postcode': string,
    'country': string,
    'country_code': string,
  },
  'boundingbox': string[]
}

export interface UseGetAddressReturn {
  address: string | null
  loadingAddress: boolean
  errorAddress: string
  getAddress: (position: GeolocationProps | null) => void
}
