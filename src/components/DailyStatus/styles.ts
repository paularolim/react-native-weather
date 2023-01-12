import { Image, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  padding: 12px;
  border-radius: 12px;
`;

export const Date = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  color: #5896FD;
`;

export const Temperature = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const MinLabel = styled(Text)`
  font-size: 24px;
  line-height: 36px;
  font-weight: bold;
  color: #8D8D8D;
`;

export const MaxLabel = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  color: #8D8D8D;
`;

export const StatusContainer = styled(View)`
  justify-content: center;
`;

export const Icon = styled(Image)`
  width: 35px;
  height: 30px;
  resize-mode: contain;
`;

export const StatusLabel = styled(Text)`
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  color: #806EF8;
  margin-top: 10px;
`;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#00000040',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
