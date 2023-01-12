import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Day, Gradient, Hour, Icon, Solid, styles, Temperature, WeekDay } from './styles';
import { BalloonClimateProps, ContainerProps } from './types';

import img from '../../assets/images/cloud-zap.png';

export function BalloonClimate({
  variant,
  active = false,
  hasShadow = false,
  info,
}: BalloonClimateProps) {
  const Container = useCallback(
    ({ children }: ContainerProps) => {
      if (variant === 'day' && active) {
        return <Solid style={hasShadow && styles.shadow}>{children}</Solid>;
      }
      if (variant === 'day' && !active) {
        return (
          <View style={hasShadow && styles.shadow}>
            <Gradient colors={['#AECDFF', '#5896FD']}>{children}</Gradient>
          </View>
        );
      }
      if (variant === 'hour' && active) {
        return (
          <View style={[hasShadow && styles.shadow, styles.purpleShadow]}>
            <Gradient colors={['#B0A4FF', '#806EF8']}>{children}</Gradient>
          </View>
        );
      }
      return <Solid style={hasShadow && styles.shadow}>{children}</Solid>;
    },
    [active, hasShadow, variant],
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
        <Hour active={active}>{hour}</Hour>
        <Icon source={img} />
        <Temperature active={active}>{temperature}</Temperature>
      </>
    );
  }, [active, info, variant]);

  return (
    <Container>
      <Content />
    </Container>
  );
}
