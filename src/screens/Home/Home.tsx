import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { HourDetails } from './components/HourDetails';
import { Header } from './components/Header';
import { Location } from './components/Location';
import { CardDetails } from './components/CardDetails';

export function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ justifyContent: 'space-between', flex: 1 }}>
        <Header />
        <Location />
        <CardDetails />
        <HourDetails />
      </View>
    </SafeAreaView>
  );
}
