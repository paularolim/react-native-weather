import React from 'react';
import { Image, View } from 'react-native';

import mapImg from '../../../../assets/images/map.png';
import { Date, Place } from './styles';

export function Location() {
  return (
    <View
      style={{
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View>
        <Place>{'Mauá,\nSão Paulo'}</Place>
        <Date>Quinta, 29 de dezembro</Date>
      </View>
      <Image source={mapImg} style={{ width: 60, height: 70, resizeMode: 'contain' }} />
    </View>
  );
}
