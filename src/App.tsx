import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

import { Home } from './screens/Home';

moment.locale('pt-br');

export function App() {
  return <Home />;
}
