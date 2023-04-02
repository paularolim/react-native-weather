import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';

import { Icon } from '../Icon';
import { Container, ContainerGradient, IconContainer, IconGradient, Label, styles } from './styles';
import { ButtonContainerProps, ButtonIconProps, ButtonLabelProps } from './types';

export function ButtonContainer({
  children,
  hasShadow,
  format = 'default',
  background = 'default',
  onPress,
}: ButtonContainerProps) {
  const theme = useTheme();

  if (background === 'gradient') {
    return (
      <TouchableOpacity onPress={onPress} style={hasShadow && styles.shadow}>
        <ContainerGradient colors={[theme.colors.secondaryContainer, theme.colors.secondary]}>
          {children}
        </ContainerGradient>
      </TouchableOpacity>
    );
  }

  return (
    <Container
      background={background}
      style={hasShadow && styles.shadow}
      format={format}
      onPress={onPress}
    >
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
  const theme = useTheme();

  if (background === 'gradient') {
    return (
      <IconGradient colors={[theme.colors.primary, theme.colors.primaryContainer]}>
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
