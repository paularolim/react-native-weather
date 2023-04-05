import React from 'react';
import { useTheme } from 'styled-components';

import { Avatar } from '@components/Avatar';
import { Button } from '@components/Button';

import { Container } from './styles';
import { HeaderProps } from './types';

export function Header({ toggleDrawer }: HeaderProps) {
  const theme = useTheme();

  return (
    <Container>
      <Button.Container hasShadow format="square" onPress={toggleDrawer}>
        <Button.Icon name="menu" fill={theme.colors.onBackground} />
      </Button.Container>

      <Avatar size="sm" source={{ uri: 'https://static.diverseui.com/male-21.jpg' }} hasShadow />
    </Container>
  );
}
