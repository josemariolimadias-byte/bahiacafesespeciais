
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
    imageUrl: 'https://images.unsplash.com/photo-1559056191-7440407a1195?auto=format&fit=crop&q=80&w=800'
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
    description: 'Notas de jasmim e mel. Processo natural.',
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Vulcano Blend',
    region: 'Norte do Paraná',
    price: 38.00,
    description: 'Corpo denso, notas de caramelo tostado.',
    imageUrl: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Altitude Blue',
    region: 'Sul de Minas',
    price: 42.00,
    description: 'Acidez tartárica, frutas vermelhas.',
    imageUrl: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&q=80&w=800'
  }
];
