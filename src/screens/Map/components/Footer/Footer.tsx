import React, { useCallback, useEffect } from 'react';
import { FlatList, View } from 'react-native';

import { BalloonClimate } from '@components/BallonClimate';
import { CardClimate } from '@components/CardClimate';
import { Shimmer } from '@components/Shimmer';
import { useGetOverviewClimate } from '@hooks/useGetOverviewClimate';
import { useGetTodayClimate } from '@hooks/useGetTodayClimate';

import { Container } from './styles';
import { FooterProps } from './types';

export function Footer({ position, loadingPosition }: FooterProps) {
  const { getOverview, overviewInfo, loadingOverview } = useGetOverviewClimate();
  const { getTodayClimate, todayClimateInfo, loadingTodayClimate } = useGetTodayClimate();

  const Item = useCallback(
    ({ item }) => (
      <BalloonClimate
        variant="hour"
        info={{ hour: item.hour, temperature: item.temp }}
        active={item.active}
        hasShadow
      />
    ),
    [],
  );

  const Separator = useCallback(() => <View style={{ width: 12 }} />, []);

  useEffect(() => {
    getOverview(position);
  }, [getOverview, position]);

  useEffect(() => {
    getTodayClimate(position);
  }, [getTodayClimate, position]);

  if (loadingOverview || loadingTodayClimate || loadingPosition) {
    return (
      <Container>
        <Shimmer height={269} radius={24} />
      </Container>
    );
  }

  return (
    <Container>
      <CardClimate
        variant="secondary"
        temperature={overviewInfo?.temperature ? `${overviewInfo.temperature}°C` : ''}
        thermalSensation={overviewInfo?.feelsLike ? `Sensação ${overviewInfo.feelsLike}°` : ''}
      >
        <FlatList
          data={todayClimateInfo}
          keyExtractor={(item, index) => `${item.hour}_${item.temp}_${index}`}
          renderItem={Item}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={Separator}
          contentContainerStyle={{ paddingHorizontal: 24 }}
        />
      </CardClimate>
    </Container>
  );
}
