import React, { useMemo } from 'react';
import {
  Container,
  Date,
  Header,
  HeaderInfo,
  Icon,
  Middle,
  MiddleInfo,
  Status,
  Temperature,
  ThermalSensation,
  WindIcon,
  Wrapper,
} from './styles';
import { CardClimateProps } from './types';

import cloud from '../../assets/images/cloud-zap.png';
import wind from '../../assets/images/wind.png';

export function CardClimate({
  variant,
  children,
  temperature,
  thermalSensation,
  date,
  status,
}: CardClimateProps) {
  const gradient = useMemo(
    () => (variant === 'primary' ? ['#AECDFF', '#5896FD'] : ['#B0A4FF', '#806EF8']),
    [variant],
  );

  return (
    <Wrapper>
      <Container colors={gradient}>
        <Header>
          <HeaderInfo>
            <Temperature>{temperature}</Temperature>
            <ThermalSensation>{thermalSensation}</ThermalSensation>
          </HeaderInfo>
        </Header>
        {date && status && (
          <Middle>
            <MiddleInfo>
              <Status>{status}</Status>
              <Date>{date}</Date>
            </MiddleInfo>
            <WindIcon source={wind} />
          </Middle>
        )}
        {children}
      </Container>
      <Icon source={cloud} />
    </Wrapper>
  );
}
