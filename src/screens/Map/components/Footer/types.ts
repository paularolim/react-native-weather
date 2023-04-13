import { GetPositionOut } from '@hooks/useGetPosition';

export type FooterProps = Omit<GetPositionOut, 'getPosition'>;
