import { ReactNode } from 'react';

export interface InfoClimateProps {
  variant: 'solid' | 'gradient';
  label: string;
}

export interface ContainerProps {
  children: ReactNode;
}
