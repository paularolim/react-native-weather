import React from 'react';
import { View } from 'react-native';

import { Shimmer } from '../Shimmer';

export function InfoClimateLoading() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Shimmer height={60} width={60} radius={20} />
      <View style={{ height: 8 }} />
      <Shimmer height={10} width={28} radius={4} />
    </View>
  );
}
