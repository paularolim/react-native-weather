import React, { useCallback } from 'react';
import { Gradient, Icon, Label, Solid, styles, Wrapper } from './styles';
import { ContainerProps, InfoClimateProps } from './types';

import img from '../../assets/images/cloud-zap.png';

export function InfoClimate({ variant, label }: InfoClimateProps) {
  const Container = useCallback(({ children }: ContainerProps) => {
    if (variant === 'solid') {
      return <Solid style={styles.shadow}>{children}</Solid>;
    }
    return <Gradient colors={['#FFFFFF00', '#806EF866']}>{children}</Gradient>;
  }, []);

  return (
    <Wrapper>
      <Container>
        <Icon source={img} />
      </Container>
      <Label variant={variant}>{label}</Label>
    </Wrapper>
  );
}
