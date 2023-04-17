import img2 from '@assets/images/cloud-zap.png';
import img1 from '@assets/images/moon-cloud-mid-rain.png';
import img3 from '@assets/images/wind.png';

import { ListData } from './types';

export const list: ListData[] = [
  {
    id: '1',
    title: 'Previsões precisas do tempo',
    description:
      'Com nosso aplicativo, você nunca mais será pego de surpresa pelo mau tempo. Nossas previsões são precisas e atualizadas em tempo real, permitindo que você planeje seu dia com confiança.',
    image: img1,
  },
  {
    id: '2',
    title: 'Alertas meteorológicos em tempo real',
    description:
      'Fique sempre um passo à frente do clima com nossos alertas meteorológicos em tempo real. Receba notificações instantâneas sobre condições climáticas severas, como tempestades, ventos fortes e muito mais.',
    image: img2,
  },
  {
    id: '3',
    title: 'Personalização do tempo',
    description:
      'Personalize sua experiência com o tempo, selecionando suas cidades favoritas e recebendo atualizações personalizadas sobre as condições atuais e futuras. Obtenha as informações meteorológicas que mais importam para você, sempre que precisar.',
    image: img3,
  },
];
