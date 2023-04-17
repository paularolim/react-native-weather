import React, { useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

import img from '@assets/images/moon-cloud-mid-rain.png';
import { colors } from '@styles/theme/colors';

import { Indicator } from './components/Indicator';
import { list } from './data';
import {
  MainCircle,
  Container,
  TopContainer,
  Circle,
  SlideImage,
  BottomSheet,
  IndicatorContainer,
  CarouselContainer,
  CarouselTitle,
  CarouselDescription,
} from './styles';
import { ListData } from './types';

const pattern1 = [colors.primary[80], colors.primary[50]];
const pattern2 = [colors.primary[50], colors.primary[80]];

export function Introduction() {
  const translateX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  }, []);

  const renderCarousel = useCallback(
    ({ item }: ListRenderItemInfo<ListData>) => (
      <CarouselContainer>
        <CarouselTitle>{item.title}</CarouselTitle>
        <CarouselDescription>{item.description}</CarouselDescription>
      </CarouselContainer>
    ),
    [],
  );

  const renderIndicator = useCallback(
    ({ index }: ListRenderItemInfo<ListData>) => (
      <Indicator index={index} translateX={translateX} size={list.length} />
    ),
    [translateX],
  );

  return (
    <Container>
      <TopContainer colors={pattern1}>
        <MainCircle colors={pattern2}>
          <Circle colors={pattern1} index={1}>
            <Circle colors={pattern2} index={2}>
              <Circle colors={pattern1} index={3} />
            </Circle>
          </Circle>
        </MainCircle>
        <SlideImage source={img} />
      </TopContainer>

      <BottomSheet>
        <IndicatorContainer>
          <Animated.FlatList
            data={list}
            renderItem={renderIndicator}
            keyExtractor={(item) => item.id}
            horizontal
            scrollEnabled={false}
            contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
          />
        </IndicatorContainer>

        <Animated.FlatList
          data={list}
          renderItem={renderCarousel}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          scrollEventThrottle={64}
          bounces={false}
          onScroll={onScroll}
        />
      </BottomSheet>
    </Container>
  );
}
