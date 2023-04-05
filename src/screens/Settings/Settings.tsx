import { useAppTheme } from '@states/useAppTheme';
import React from 'react';

import { Checkbox } from '@components/Checkbox';
import { Header } from '@components/Header';

import { Container, SafeArea, SectionTitle } from './styles';
import { SettingsProps } from './types';

export function Settings({ navigation }: SettingsProps) {
  const { darkMode, toggleTheme } = useAppTheme();

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <SafeArea>
      <Header toggleDrawer={toggleDrawer} />
      <Container>
        <SectionTitle>Aparência</SectionTitle>
        <Checkbox label="Tema escuro" checked={darkMode} onPress={toggleTheme} />
      </Container>
    </SafeArea>
  );
}
