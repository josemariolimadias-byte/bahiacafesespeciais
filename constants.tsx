
import { CoffeeRegion, SubscriptionPlan, Product } from './types';

export const REGIONS: CoffeeRegion[] = [
  {
    id: 'norte-parana',
    name: 'Norte do Paraná',
    description: 'Tradição centenária com solos vulcânicos que conferem corpo e doçura equilibrada aos grãos.',
    imageUrl: 'https://images.unsplash.com/photo-1500353391678-d7b57979d6d2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'alta-mogiana',
    name: 'Alta Mogiana Paulista',
    description: 'Altitude privilegiada e clima ideal, resultando em cafés com acidez cítrica e notas achocolatadas.',
    imageUrl: 'https://images.unsplash.com/photo-1524350300060-d39f447a24ee?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sul-minas',
    name: 'Sul de Minas Gerais',
    description: 'A maior região produtora do mundo, oferecendo uma diversidade incrível de sabores e aromas complexos.',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cerrado-mineiro',
    name: 'Cerrado Mineiro',
    description: 'Primeira região com Denominação de Origem no Brasil, famosa por cafés intensos e persistentes.',
    imageUrl: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'chapada-diamantina',
    name: 'Chapada Diamantina',
    description: 'Cafés cultivados em altas altitudes na Bahia, conhecidos por sua delicadeza floral e frescor único.',
    imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=800'
  }
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'explorador',
    name: 'Explorador',
    price: 'R$ 89,90',
    features: [
      '1 Pacote de 250g/mês',
      'Curadoria Bahia Cafés',
      'Ficha técnica do produtor',
      '10% off na loja avulsa'
    ]
  },
  {
    id: 'entusiasta',
    name: 'Entusiasta',
    price: 'R$ 159,90',
    features: [
      '2 Pacotes de 250g/mês',
      'Regiões diferentes a cada mês',
      'Dicas de preparo exclusivas',
      '15% off na loja avulsa',
      'Brinde surpresa no 3º mês'
    ],
    recommended: true
  },
  {
    id: 'mestre',
    name: 'Mestre Cafeeiro',
    price: 'R$ 229,90',
    features: [
      '3 Pacotes de 250g/mês',
      'Acesso antecipado a microlotes',
      'Workshop online trimestral',
      '20% off na loja avulsa',
      'Frete grátis nacional'
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Reserva Chapada',
    region: 'Chapada Diamantina',
    price: 45.00,
    description: 'Este microlote exclusivo da Chapada Diamantina apresenta um corpo sedoso com acidez cítrica brilhante. Revela notas sensoriais complexas de jasmim, mel silvestre e um toque sutil de limão siciliano. O processo de secagem natural preserva a doçura intensa, resultando em uma finalização longa e floral.',
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Vulcano Blend',
    region: 'Norte do Paraná',
    price: 38.00,
    description: 'Um café potente e estruturado, originário dos solos vulcânicos ricos em minerais. Este blend destaca-se pela doçura marcante que remete ao caramelo tostado e chocolate amargo. Possui corpo denso e aveludado, com baixíssima acidez, sendo a escolha ideal para quem busca uma xícara clássica e reconfortante.',
    imageUrl: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Altitude Blue',
    region: 'Sul de Minas',
    price: 42.00,
    description: 'Produzido nas altas montanhas mineiras, o Altitude Blue é uma explosão de vivacidade. Com uma acidez tartárica que lembra uvas verdes e frutas vermelhas frescas, este café surpreende pelo frescor e leveza. Apresenta notas de açúcar mascavo e um aroma perfumado que preenche o ambiente logo na primeira extração.',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800'
  }
];
