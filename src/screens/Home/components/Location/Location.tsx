import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import moment from 'moment';

import mapImg from '../../../../assets/images/map.png';
import { DateText, LoadingContainer, LoadingDataContainer, Place } from './styles';
import { useGetPosition } from '../../../../hooks/useGetPosition';
import { useGetAddress } from '../../../../hooks/useGetAddress';
import { Shimmer } from '../../../../components/Shimmer';

const date = moment(new Date()).format('dddd, DD/MMMM').replace('/', ' de ');

export function Location() {
  const { position, getPosition, loadingPosition } = useGetPosition();
  const { address, getAddress, loadingAddress, errorAddress } = useGetAddress();

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    getAddress(position);
  }, [position]);

  if (errorAddress) {
    return (
      <View
        style={{
          paddingHorizontal: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 24,
        }}
      >
        <View>
          <Place>
            Ops!
            {'\n'}
            Houve um erro.
          </Place>
          <DateText>Tente novamente mais tarde :(</DateText>
        </View>
        <Image source={mapImg} style={{ width: 60, height: 70, resizeMode: 'contain' }} />
      </View>
    );
  }

  if (loadingPosition || loadingAddress) {
    return (
      <LoadingContainer>
        <LoadingDataContainer>
          <Shimmer height={27} width={83} radius={4} />
          <Shimmer height={27} width={121} radius={4} />
          <Shimmer height={18} width={144} radius={4} />
        </LoadingDataContainer>

        <Shimmer height={82} width={58} radius={4} />
      </LoadingContainer>
    );
  }

  return (
    <View
      style={{
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 24,
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
