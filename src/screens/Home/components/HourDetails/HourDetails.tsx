import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { BalloonClimate } from '../../../../components/BallonClimate';
import { Button } from '../../../../components/Button';
import { Today } from './styles';

export function HourDetails() {
  const Separator = useCallback(() => <View style={{ width: 12 }} />, []);

  const Item = useCallback(
    ({ item }) => (
      <BalloonClimate
        variant="hour"
        info={{ hour: item.hour, temperature: item.temperature }}
        active={item.active}
        hasShadow
      />
    ),
    [],
  );

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
        data={[
          { id: '1', hour: '12:00', temperature: '27°' },
          { id: '2', hour: '12:00', temperature: '27°', active: true },
          { id: '3', hour: '12:00', temperature: '27°' },
          { id: '4', hour: '12:00', temperature: '27°' },
          { id: '5', hour: '12:00', temperature: '27°' },
          { id: '6', hour: '12:00', temperature: '27°' },
          { id: '7', hour: '12:00', temperature: '27°' },
          { id: '8', hour: '12:00', temperature: '27°' },
        ]}
        keyExtractor={(item) => item.id}
        renderItem={Item}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 12 }}
      />
    </View>
  );
}
