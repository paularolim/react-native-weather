import { avatar } from './avatar';
import { radius } from './radius';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';
import { fontSize } from './fontSize';
import { lineHeight } from './lineHeight';

const commonTheme = {
  avatar,
  radius,
  fontSize,
  lineHeight,
};

export const theme = {
  light: {
    colors: lightTheme,
    ...commonTheme,
  },
  dark: {
    colors: darkTheme,
    ...commonTheme,
  },
};

export type ThemeType = typeof theme.light
