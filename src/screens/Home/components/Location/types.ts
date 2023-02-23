import { GetPositionOut } from '../../../../hooks/useGetPosition';

export type LocationProps = Omit<GetPositionOut, 'getPosition'>
