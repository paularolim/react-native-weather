import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'react-native-gesture-handler';

import { AppRoutes } from './routes';

moment.locale('pt-br');

export function App() {
  return <AppRoutes />;
}
