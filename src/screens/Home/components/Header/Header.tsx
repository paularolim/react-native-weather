import React from 'react';
import { Button } from '../../../../components/Button';
import { HeaderProps } from './types';
import { Avatar } from '../../../../components/Avatar';
import { Container } from './styles';

export function Header({ toggleDrawer }: HeaderProps) {
  return (
    <Container>
      <Button.Container hasShadow format="square" onPress={toggleDrawer}>
        <Button.Icon name="menu" />
      </Button.Container>

      <Avatar size="sm" source={{ uri: 'https://static.diverseui.com/male-21.jpg' }} hasShadow />
    </Container>
  );
}
