import React from 'react';
import {
  Container,
  Date,
  Icon,
  MaxLabel,
  MinLabel,
  StatusContainer,
  StatusLabel,
  styles,
  Temperature,
} from './styles';
import { DailyStatusProps } from './types';

import img from '../../assets/images/cloud-zap.png';

export function DailyStatus({ date, label, max, min }: DailyStatusProps) {
  return (
    <Container style={styles.shadow}>
      <Date>{date}</Date>

      <Temperature>
        <MinLabel>{min}</MinLabel>
        {max && <MaxLabel>{`/${max}`}</MaxLabel>}
      </Temperature>

      <StatusContainer>
        <Icon source={img} />
        <StatusLabel>{label}</StatusLabel>
      </StatusContainer>
    </Container>
  );
}
