import React, { useEffect } from 'react';

import { CardClimate } from '@components/CardClimate';
import { InfoClimate, InfoClimateLoading } from '@components/InfoClimate';
import { Shimmer } from '@components/Shimmer';
import { useGetOverviewClimate } from '@hooks/useGetOverviewClimate';

import { Container, InfoClimateContainer } from './styles';
import { CardDetailsProps } from './types';

export function CardDetails({ position, loadingPosition }: CardDetailsProps) {
  const { getOverview, overviewInfo, loadingOverview } = useGetOverviewClimate();

  useEffect(() => {
    getOverview(position);
  }, [getOverview, position]);

  /* TODO: error feedback */

  if (loadingPosition || loadingOverview) {
    return (
      <Container>
        <Shimmer height={204} radius={24} />

        <InfoClimateContainer>
          <InfoClimateLoading />
          <InfoClimateLoading />
          <InfoClimateLoading />
        </InfoClimateContainer>
      </Container>
    );
  }

  return (
    <Container>
      <CardClimate
        variant="primary"
        temperature={overviewInfo?.temperature ? `${overviewInfo.temperature}°C` : ''}
        thermalSensation={overviewInfo?.feelsLike ? `Sensação ${overviewInfo.feelsLike}°` : ''}
        date="Hoje"
        status={overviewInfo?.description}
      />

      <InfoClimateContainer>
        <InfoClimate variant="solid" label={overviewInfo?.rain ? `${overviewInfo.rain}%` : '0%'} />
        <InfoClimate
          variant="solid"
          label={overviewInfo?.windSpeed ? `${overviewInfo.windSpeed}km/h` : ''}
        />
        <InfoClimate
          variant="solid"
          label={overviewInfo?.humidity ? `${overviewInfo.humidity}%` : ''}
        />
      </InfoClimateContainer>
    </Container>
  );
}
