import { IconName } from '../../../components/Icon';
import { DrawerParamList } from '../../types';

export interface DrawerItemProps {
  label: string;
  route: keyof DrawerParamList;
  icon: IconName;
}
