import { ReactNode } from 'react';
import { IconName } from '../Icon';

export type ButtonContainerVariant = 'default' | 'square' | 'rounded';
export type ButtonContainerBackground = 'default' | 'gradient' | 'transparent';

export interface ButtonContainerProps {
  children: ReactNode;
  hasShadow?: boolean;
  format?: ButtonContainerVariant;
  background?: ButtonContainerBackground;
  onPress?: () => void;
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
