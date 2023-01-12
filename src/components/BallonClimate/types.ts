import { ReactNode } from 'react';

interface InfoDayProps {
  variant: 'day';
  info: {
    day: string;
    weekDay: string;
  };
}

interface InfoHourProps {
  variant: 'hour';
  info: {
    hour: string;
    temperature: string;
  };
}

export interface CommonBalloonClimateProps {
  active?: boolean;
  hasShadow?: boolean;
}

export type ConditionalBalloonClimateProps = InfoDayProps | InfoHourProps;

export type BalloonClimateProps = CommonBalloonClimateProps &
  ConditionalBalloonClimateProps;

export interface ContainerProps {
  children: ReactNode;
}
