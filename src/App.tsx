import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'react-native-gesture-handler';

import { ThemeProvider } from 'styled-components';
import { AppRoutes } from './routes';
import { theme } from './styles/theme';

moment.locale('pt-br');

export function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <AppRoutes />
    </ThemeProvider>
  );
}
