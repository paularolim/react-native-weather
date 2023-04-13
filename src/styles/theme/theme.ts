import { avatar } from './avatar';
import { darkTheme } from './darkTheme';
import { fontSize } from './fontSize';
import { lightTheme } from './lightTheme';
import { lineHeight } from './lineHeight';
import { radius } from './radius';

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

export type ThemeType = typeof theme.light;
