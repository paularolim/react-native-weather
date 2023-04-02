import React, { useCallback } from 'react';

import img from '@assets/images/cloud-zap.png';

import { Gradient, Icon, Label, Solid, styles, Wrapper } from './styles';
import { ContainerProps, InfoClimateProps } from './types';

export function InfoClimate({ variant, label }: InfoClimateProps) {
  const Container = useCallback(
    ({ children }: ContainerProps) => {
      if (variant === 'solid') {
        return <Solid style={styles.shadow}>{children}</Solid>;
      }
      // TODO: apply theme
      return <Gradient colors={['#FFFFFF00', '#806EF866']}>{children}</Gradient>;
    },
    [variant],
  );

  return (
    <Wrapper>
      <Container>
        <Icon source={img} />
      </Container>
      <Label variant={variant}>{label}</Label>
    </Wrapper>
  );
}
