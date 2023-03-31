import React from 'react';
import { View } from 'react-native';
import { Button } from '../../../../components/Button';
import { HeaderProps } from './types';

export function Header({ toggleDrawer }: HeaderProps) {
  return (
    <View style={{ paddingHorizontal: 24 }}>
      <Button.Container hasShadow format="square" onPress={toggleDrawer}>
        <Button.Icon name="menu" />
      </Button.Container>
    </View>
  );
}
