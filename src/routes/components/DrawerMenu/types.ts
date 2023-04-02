import { IconName } from '@components/Icon';
import { DrawerParamList } from '@routes/types';

export interface DrawerItemProps {
  label: string;
  route: keyof DrawerParamList;
  icon: IconName;
}
