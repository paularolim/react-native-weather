import React, { useCallback, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { BalloonClimate } from '../../../../components/BallonClimate';
import { Button } from '../../../../components/Button';
import { useGetTodayClimate } from '../../../../hooks/useGetTodayClimate';
import { Container, Header, Today } from './styles';
import { HourDetailsProps } from './types';
import { Shimmer } from '../../../../components/Shimmer';

export function HourDetails({ position }: HourDetailsProps) {
  const { getTodayClimate, todayClimateInfo, loadingTodayClimate } = useGetTodayClimate();

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

  const ItemLoading = useCallback(() => <Shimmer width={50} height={106} radius={50} />, []);

  useEffect(() => {
    getTodayClimate(position);
  }, [getTodayClimate, position]);

  if (loadingTodayClimate) {
    return (
      <Container>
        <Header>
          <Shimmer width={55} height={32} radius={4} />
          <Shimmer width={171} height={32} radius={4} />
        </Header>

        <FlatList
          data={Array.from({ length: 7 })}
          keyExtractor={(_, index) => `${index}`}
          renderItem={ItemLoading}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={Separator}
          contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 12 }}
        />
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Today>Hoje</Today>
        <Button.Container background="transparent">
          <Button.Label color="#5896FD" fontSize={18}>
            Próximos 7 dias
          </Button.Label>
          <Button.Icon name="arrow-right" />
        </Button.Container>
      </Header>
      <FlatList
        data={todayClimateInfo}
        keyExtractor={(item, index) => `${item.hour}_${item.temp}_${index}`}
        renderItem={Item}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 12 }}
      />
    </Container>
  );
}
