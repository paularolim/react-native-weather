import React from 'react';

import { Container, Label, Rounded } from './styles';
import { CheckboxProps } from './types';

export function Checkbox({ checked, label, onPress }: CheckboxProps) {
  return (
    <Container onPress={onPress}>
      <Label>{label}</Label>
      <Rounded checked={Boolean(checked)} />
    </Container>
  );
}
