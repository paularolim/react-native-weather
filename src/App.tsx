import 'moment/locale/pt-br';
import 'react-native-gesture-handler';

import { useAppTheme } from '@states/useAppTheme';
import moment from 'moment';
import React, { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from '@routes/AppRoutes';
import { theme as themeObj } from '@styles/theme';

moment.locale('pt-br');

export function App() {
  const { darkMode } = useAppTheme();

  const theme = useMemo(() => (darkMode ? themeObj.dark : themeObj.light), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}
