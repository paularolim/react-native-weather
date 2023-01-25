import React from 'react';
import { View } from 'react-native';
import { CardClimate } from '../../../../components/CardClimate';
import { InfoClimate } from '../../../../components/InfoClimate';

export function CardDetails() {
  return (
    <View style={{ paddingHorizontal: 24 }}>
      <CardClimate
        variant="primary"
        temperature="27°"
        thermalSensation="Sensação 32°"
        date="Hoje"
        status="Chuva forte"
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 24 }}>
        <InfoClimate variant="solid" label="28%" />
        <InfoClimate variant="solid" label="8km/h" />
        <InfoClimate variant="solid" label="64%" />
      </View>
    </View>
  );
}
