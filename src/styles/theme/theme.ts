import { avatar } from './avatar';
import { radius } from './radius';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';

export const theme = {
  light: {
    colors: lightTheme,
    avatar,
    radius,
  },
  dark: {
    colors: darkTheme,
    avatar,
    radius,
  },
};

export type ThemeType = typeof theme.light
