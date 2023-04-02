import React, { useEffect } from 'react';
import { View } from 'react-native';
import moment from 'moment';

import { Container, DateText, ErrorData, LoadingDataContainer, PinImage, Place } from './styles';
import { useGetAddress } from '../../../../hooks/useGetAddress';
import { Shimmer } from '../../../../components/Shimmer';
import { LocationProps } from './types';

const date = moment(new Date()).format('dddd, DD/MMMM').replace('/', ' de ');

export function Location({ loadingPosition, position }: LocationProps) {
  const { address, getAddress, loadingAddress, errorAddress } = useGetAddress();

  useEffect(() => {
    getAddress(position);
  }, [getAddress, position]);

  if (errorAddress) {
    return (
      <Container>
        <ErrorData>
          <Place>
            Ops!
            {'\n'}
            Houve um erro.
          </Place>
          <DateText>Tente novamente mais tarde :(</DateText>
        </ErrorData>
        <PinImage />
      </Container>
    );
  }

  if (loadingPosition || loadingAddress) {
    return (
      <Container>
        <LoadingDataContainer>
          <Shimmer height={27} width={83} radius={4} />
          <Shimmer height={27} width={121} radius={4} />
          <Shimmer height={18} width={144} radius={4} />
        </LoadingDataContainer>

        <Shimmer height={82} width={58} radius={4} />
      </Container>
    );
  }

  return (
    <Container>
      <View>
        <Place>{address}</Place>
        <DateText>{date}</DateText>
      </View>
      <PinImage />
    </Container>
  );
}
