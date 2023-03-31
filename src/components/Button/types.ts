import { ReactNode } from 'react';
import { IconName } from '../Icon';

export type ButtonContainerVariant = 'default' | 'square' | 'rounded';

export interface ButtonContainerProps {
  children: ReactNode;
  hasShadow?: boolean;
  format?: ButtonContainerVariant;
  background?: 'default' | 'gradient';
  onPress: () => void;
}

export interface ButtonLabelProps {
  children: string;
  color?: string;
  fontSize?: number
  fontWeight?: 'normal' | 'bold';
}

export interface ButtonIconProps {
  name: IconName;
  background?: 'default' | 'gradient';
}
