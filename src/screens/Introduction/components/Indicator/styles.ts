import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import { colors } from '@styles/theme/colors';

export const Container = styled(Animated.View)`
  background-color: ${colors.secondary[80]};
  width: 10px;
  height: 10px;
  margin: 0px 4px;
  border-radius: 5px;
`;
