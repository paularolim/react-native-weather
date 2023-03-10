declare module '*.png';

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

declare module '@env' {
  export const LOCATIONIQ_API_KEY: string;
  export const OPEN_WEATHER_API_KEY: string;
}
