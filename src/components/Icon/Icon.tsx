import React from 'react';
import { SvgProps } from 'react-native-svg';
import { IconName, IconProps } from './types';

import arrowRight from '../../assets/icons/arrow-right.svg';
import arrowRightAlt from '../../assets/icons/arrow-right-alt.svg';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import menu from '../../assets/icons/menu.svg';
import position from '../../assets/icons/position.svg';
import compass from '../../assets/icons/compass.svg';
import settings from '../../assets/icons/settings.svg';
import location from '../../assets/icons/location.svg';
import graph from '../../assets/icons/graph.svg';

const options: Record<IconName, React.FC<SvgProps>> = {
  'arrow-right': arrowRight,
  'arrow-left': arrowLeft,
  'arrow-right-alt': arrowRightAlt,
  menu,
  position,
  settings,
  compass,
  location,
  graph,
};

export function Icon({ name }: IconProps) {
  const Component = options[name];

  return <Component />;
}
