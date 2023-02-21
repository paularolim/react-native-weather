import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

import { AppRoutes } from './routes/AppRoutes';

moment.locale('pt-br');

export function App() {
  return <AppRoutes />;
}
