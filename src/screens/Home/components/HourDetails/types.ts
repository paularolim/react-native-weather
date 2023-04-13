import { GetPositionOut } from '@hooks/useGetPosition';

export type HourDetailsProps = Omit<GetPositionOut, 'getPosition'>;
