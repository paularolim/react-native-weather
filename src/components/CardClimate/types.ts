import { ReactNode } from 'react';

export interface CardClimateProps {
  children?: ReactNode;
  variant: 'primary' | 'secondary';
  temperature: string;
  thermalSensation: string;
  status?: string;
  date?: string;
}
