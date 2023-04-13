import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';

import img from '@assets/images/cloud-zap.png';

import { Day, Gradient, Hour, Icon, Solid, styles, Temperature, WeekDay } from './styles';
import { BalloonClimateProps, ContainerProps } from './types';

export function BalloonClimate({
  variant,
  active = false,
  hasShadow = false,
  info,
}: BalloonClimateProps) {
  const theme = useTheme();

  const Container = useCallback(
    ({ children }: ContainerProps) => {
      if (variant === 'day' && active) {
        return <Solid style={hasShadow && styles.shadow}>{children}</Solid>;
      }
      if (variant === 'day' && !active) {
        return (
          <View style={hasShadow && styles.shadow}>
            <Gradient colors={[theme.colors.primary, theme.colors.primaryContainer]}>
              {children}
            </Gradient>
          </View>
        );
      }
      if (variant === 'hour' && active) {
        return (
          <View style={hasShadow && styles.purpleShadow}>
            <Gradient colors={[theme.colors.secondaryContainer, theme.colors.secondary]}>
              {children}
            </Gradient>
          </View>
        );
      }
      return <Solid style={hasShadow && styles.shadow}>{children}</Solid>;
    },
    [
      active,
      hasShadow,
      theme.colors.primary,
      theme.colors.primaryContainer,
      theme.colors.secondary,
      theme.colors.secondaryContainer,
      variant,
    ],
  );

  const Content = useCallback(() => {
    if (variant === 'day') {
      const { day, weekDay } = info;
      return (
        <>
          <Icon source={img} />
          <Day active={active}>{day}</Day>
          <WeekDay active={active}>{weekDay}</WeekDay>
        </>
      );
    }
    const { hour, temperature } = info;
    return (
      <>
        <Hour>{hour}</Hour>
        <Icon source={img} />
        <Temperature>{temperature}</Temperature>
      </>
    );
  }, [active, info, variant]);

  return (
    <Container>
      <Content />
    </Container>
  );
}
