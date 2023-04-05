import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { Home } from '@screens/Home';
import { Settings } from '@screens/Settings';

import { DrawerMenu } from './components/DrawerMenu';
import { DrawerParamList } from './types';

const Drawer = createDrawerNavigator<DrawerParamList>();

export function AppRoutes() {
  const drawerContent = useCallback((props) => <DrawerMenu {...props} />, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={drawerContent}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
