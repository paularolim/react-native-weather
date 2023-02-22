import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { CardClimate } from '../../../../components/CardClimate';
import { InfoClimate } from '../../../../components/InfoClimate';
import { useGetOverviewClimate } from '../../../../hooks/useGetOverviewClimate';
import { useGetPosition } from '../../../../hooks/useGetPosition';

export function CardDetails() {
  const { position, getPosition, loadingPosition } = useGetPosition();
  const { getOverview, overviewInfo, loadingOverview } = useGetOverviewClimate();

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    getOverview(position);
  }, [position]);

  if (loadingPosition || loadingOverview) {
    return (
      <View
        style={{
          paddingHorizontal: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text>Carregando...</Text>
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
