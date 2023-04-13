import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView).attrs({ edges: ['bottom'] })`
  width: ${Dimensions.get(`screen`).width - 48}px;
  position: absolute;
  bottom: 0;
  margin: 0px 24px;
`;
