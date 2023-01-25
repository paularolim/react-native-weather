import React from 'react';
import { View } from 'react-native';
import { Button } from '../../../../components/Button';

export function Header() {
  return (
    <View style={{ paddingHorizontal: 24 }}>
      <Button.Container hasShadow format="square">
        <Button.Icon name="menu" />
      </Button.Container>
    </View>
  );
}
