import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import moment from 'moment';

import mapImg from '../../../../assets/images/map.png';
import { DateText, Place } from './styles';
import { useGetPosition } from '../../../../hooks/useGetPosition';
import { useGetAddress } from '../../../../hooks/useGetAddress';

const date = moment(new Date()).format('dddd, DD/MMMM').replace('/', ' de ');

export function Location() {
  const { position, getPosition, loadingPosition } = useGetPosition();
  const { address, getAddress, loadingAddress } = useGetAddress();

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    getAddress(position);
  }, [position]);

  if (loadingPosition || loadingAddress) {
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
    <View
      style={{
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View>
        <Place>{address}</Place>
        <DateText>{date}</DateText>
      </View>
      <Image source={mapImg} style={{ width: 60, height: 70, resizeMode: 'contain' }} />
    </View>
  );
}
