import React from 'react';
import { Icon } from '../Icon';
import { Container, ContainerGradient, IconContainer, IconGradient, Label, styles } from './styles';
import { ButtonContainerProps, ButtonIconProps, ButtonLabelProps } from './types';

export function ButtonContainer({
  children,
  hasShadow,
  format = 'default',
  background = 'default',
}: ButtonContainerProps) {
  if (background === 'gradient') {
    return <ContainerGradient colors={['#B0A4FF', '#806EF8']}>{children}</ContainerGradient>;
  }

  return (
    <Container style={hasShadow && styles.shadow} format={format}>
      {children}
    </Container>
  );
}

export function ButtonLabel({ children, color, fontSize, fontWeight }: ButtonLabelProps) {
  return (
    <Label color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </Label>
  );
}

export function ButtonIcon({ name, background }: ButtonIconProps) {
  if (background === 'gradient') {
    return (
      <IconGradient colors={['#AECDFF', '#5896FD']}>
        <Icon name={name} />
      </IconGradient>
    );
  }
  return (
    <IconContainer>
      <Icon name={name} />
    </IconContainer>
  );
}

export const Button = { Container: ButtonContainer, Label: ButtonLabel, Icon: ButtonIcon };
