import React, { useEffect } from 'react';
import { View } from 'react-native';
import { CardClimate } from '../../../../components/CardClimate';
import { InfoClimate, InfoClimateLoading } from '../../../../components/InfoClimate';
import { Shimmer } from '../../../../components/Shimmer';
import { useGetOverviewClimate } from '../../../../hooks/useGetOverviewClimate';
import { CardDetailsProps } from './types';

export function CardDetails({ position, loadingPosition }: CardDetailsProps) {
  const { getOverview, overviewInfo, loadingOverview } = useGetOverviewClimate();

  useEffect(() => {
    getOverview(position);
  }, [position]);

  /* TODO: error feedback */

  if (loadingPosition || loadingOverview) {
    return (
      <View style={{ paddingHorizontal: 24 }}>
        <Shimmer height={204} radius={24} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 34,
            marginTop: 24,
          }}
        >
          <InfoClimateLoading />
          <InfoClimateLoading />
          <InfoClimateLoading />
        </View>
      </View>
    );
  }

  return (
    <View style={{ paddingHorizontal: 24 }}>
      <CardClimate
        variant="primary"
        temperature={overviewInfo?.temperature ? `${overviewInfo.temperature}°C` : ''}
        thermalSensation={overviewInfo?.feelsLike ? `Sensação ${overviewInfo.feelsLike}°` : ''}
        date="Hoje"
        status={overviewInfo?.description}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 24 }}>
        <InfoClimate variant="solid" label={overviewInfo?.rain ? `${overviewInfo.rain}%` : '0%'} />
        <InfoClimate
          variant="solid"
          label={overviewInfo?.windSpeed ? `${overviewInfo.windSpeed}km/h` : ''}
        />
        <InfoClimate
          variant="solid"
          label={overviewInfo?.humidity ? `${overviewInfo.humidity}%` : ''}
        />
      </View>
    </View>
  );
}
