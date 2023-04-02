import { ImageProps } from 'react-native';
import { avatar } from '../../styles/theme';

export type AvatarProps = ImageProps & {
  size: keyof typeof avatar
  hasShadow?: boolean
}
