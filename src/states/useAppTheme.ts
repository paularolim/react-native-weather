import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAtom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { useCallback } from 'react';

const darkModeAtom = atomWithStorage(
  'darkMode',
  false,
  createJSONStorage(() => AsyncStorage),
);

export function useAppTheme() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  const toggleTheme = useCallback(() => setDarkMode(!darkMode), [darkMode, setDarkMode]);

  return { darkMode, toggleTheme };
}
