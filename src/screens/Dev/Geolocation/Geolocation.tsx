import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { GeolocationProps, getCurrentPosition } from '@services/Geolocation';

export function DevGeolocation() {
  const [location, setLocation] = useState<GeolocationProps | null>(null);

  const handleLocation = async () => {
    const position = await getCurrentPosition();
    setLocation(position);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{JSON.stringify(location)}</Text>
      <TouchableOpacity style={{ backgroundColor: 'blue' }} onPress={handleLocation}>
        <Text style={{ color: 'white' }}>Location</Text>
      </TouchableOpacity>
    </View>
  );
}
