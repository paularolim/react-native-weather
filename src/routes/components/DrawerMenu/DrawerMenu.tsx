import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

import img from '../../../assets/images/moon-cloud-mid-rain.png';
import { Avatar } from '../../../components/Avatar';
import { Button } from '../../../components/Button';
import { items } from './mock';
import { BottomImage, Container, Email, Middle, Name } from './styles';
import { DrawerItemProps } from './types';

export function DrawerMenu() {
  const theme = useTheme();

  const { navigate } = useNavigation();

  const Separator = useCallback(() => <View style={{ height: 24 }} />, []);

  const Item = useCallback(
    ({ item }: ListRenderItemInfo<DrawerItemProps>) => (
      <Button.Container background="transparent" onPress={() => navigate(item.route as never)}>
        <Button.Icon background="gradient" name={item.icon} />
        <Button.Label fontWeight="bold" color={theme.colors.onBackground}>
          {item.label}
        </Button.Label>
      </Button.Container>
    ),
    [navigate, theme.colors.onBackground],
  );

  return (
    <Container
      colors={[theme.colors.onSecondary, theme.colors.secondaryContainer]}
      start={{ x: 0.0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <SafeAreaView>
        <Avatar size="md" source={{ uri: 'https://static.diverseui.com/male-21.jpg' }} hasShadow />
        <Name>Nome Sobrenome</Name>
        <Email>exemplo@email.com</Email>

        <Middle>
          <FlatList data={items} ItemSeparatorComponent={Separator} renderItem={Item} />
        </Middle>

        <Button.Container
          background="gradient"
          hasShadow
          onPress={() => navigate('Settings' as never)}
        >
          <Button.Icon name="settings" />
          <Button.Label color={theme.colors.background} fontWeight="bold" fontSize={14}>
            Configurações
          </Button.Label>
        </Button.Container>
      </SafeAreaView>
      <BottomImage source={img} />
    </Container>
  );
}
