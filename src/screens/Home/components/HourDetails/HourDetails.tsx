import React, { useCallback, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { BalloonClimate } from '../../../../components/BallonClimate';
import { Button } from '../../../../components/Button';
import { useGetTodayClimate } from '../../../../hooks/useGetTodayClimate';
import { Today } from './styles';
import { HourDetailsProps } from './types';

export function HourDetails({ position }: HourDetailsProps) {
  const { getTodayClimate, todayClimateInfo } = useGetTodayClimate();

  const Separator = useCallback(() => <View style={{ width: 12 }} />, []);

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

  useEffect(() => {
    getTodayClimate(position);
  }, [position]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 24,
        }}
      >
        <Today>Hoje</Today>
        <Button.Container background="transparent">
          <Button.Label color="#5896FD" fontSize={18}>
            Próximos 7 dias
          </Button.Label>
          <Button.Icon name="arrow-right" />
        </Button.Container>
      </View>
      <FlatList
        data={todayClimateInfo}
        keyExtractor={(item, index) => `${item.hour}_${item.temp}_${index}`}
        renderItem={Item}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 12 }}
      />
    </View>
  );
}
