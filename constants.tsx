
import { CoffeeRegion, SubscriptionPlan, Product } from './types';

export const REGIONS: CoffeeRegion[] = [
  {
    id: 'norte-parana',
    name: 'Norte do Paraná',
    description: 'Tradição centenária com solos vulcânicos que conferem corpo e doçura equilibrada aos grãos.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1zWtuXTXhYGXEvSGZDYLUjBz327Y7FH7d&sz=w1200',
    cities: ['Londrina', 'Cornélio Procópio', 'Santo Antônio da Platina', 'Jacarezinho'],
    climate: 'Subtropical, com chuvas bem distribuídas e invernos frescos que favorecem a maturação lenta.',
    terroir: 'Famosa "Terra Roxa", solo de origem basáltica extremamente fértil e rico em minerais.',
    specifications: {
      altitude: '400m - 900m',
      process: 'Natural e Cereja Descascado',
      sensoryNotes: 'Corpo denso, doçura caramelizada, acidez média e retrogosto prolongado.'
    }
  },
  {
    id: 'alta-mogiana',
    name: 'Alta Mogiana Paulista',
    description: 'Altitude privilegiada e clima ideal, resultando em cafés com acidez cítrica e notas achocolatadas.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1YqZr6rqj6YRIASE5AKh8Hf8Av_OPIUz4&sz=w1200',
    cities: ['Franca', 'Cristais Paulista', 'Pedregulho', 'Altinópolis'],
    climate: 'Tropical de altitude, com verões chuvosos e invernos secos, ideal para a secagem natural.',
    terroir: 'Solo arenoso-argiloso com excelente drenagem em planaltos ondulados.',
    specifications: {
      altitude: '900m - 1250m',
      process: 'Natural, CD e Fermentados',
      sensoryNotes: 'Notas de chocolate e nozes, acidez cítrica brilhante e corpo aveludado.'
    }
  },
  {
    id: 'sul-minas',
    name: 'Sul de Minas Gerais',
    description: 'A maior região produtora do mundo, oferecendo uma diversidade incrível de sabores e aromas complexos.',
    imageUrl: 'https://drive.google.com/thumbnail?id=122D4ln9uQqxN3GIrXphhckdiiKJHoK76&sz=w1200',
    cities: ['Três Pontas', 'Varginha', 'Carmo de Minas', 'Guaxupé'],
    climate: 'Temperado, com temperaturas médias amenas que propiciam uma produção constante de alta qualidade.',
    terroir: 'Montanhoso, com solos diversificados que permitem microclimas únicos para variedades exóticas.',
    specifications: {
      altitude: '850m - 1450m',
      process: 'Natural e Fully Washed',
      sensoryNotes: 'Aromas floral e frutados, doçura alta de cana-de-açúcar e acidez equilibrada.'
    }
  },
  {
    id: 'cerrado-mineiro',
    name: 'Cerrado Mineiro',
    description: 'Primeira região com Denominação de Origem no Brasil, famosa por cafés intensos e persistentes.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1mF83eAQAjD12MJT05H7-NmhfwbubIiBY&sz=w1200',
    cities: ['Patrocínio', 'Araguari', 'Monte Carmelo', 'Patos de Minas'],
    climate: 'Estações bem definidas: verão quente e úmido e inverno seco, perfeito para colheita mecanizada.',
    terroir: 'Planalto com topografia plana, facilitando o manejo e garantindo uniformidade aos lotes.',
    specifications: {
      altitude: '800m - 1300m',
      process: 'Predominantemente Natural',
      sensoryNotes: 'Corpo intenso, notas marcantes de chocolate e caramelo, acidez cítrica de média a baixa.'
    }
  },
  {
    id: 'chapada-diamantina',
    name: 'Chapada Diamantina',
    description: 'Cafés cultivados em altas altitudes na Bahia, conhecidos por sua delicadeza floral e frescor único.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1Hiw_dUbHQBjS5rkTeM4hNUXsAvJ_MZKr&sz=w1200',
    cities: ['Piatã', 'Ibicoara', 'Mucugê', 'Seabra'],
    climate: 'Tropical de montanha, com noites frias mesmo no verão, o que concentra açúcares no fruto.',
    terroir: 'Solo arenoso de altitude extrema, cercado por biodiversidade preservada e águas puras.',
    specifications: {
      altitude: '1100m - 1500m',
      process: 'Natural e Cereja Descascado',
      sensoryNotes: 'Extremamente delicado, notas florais de jasmim, acidez tartárica e corpo elegante.'
    }
  }
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'explorador',
    name: 'Explorador',
    price: 'R$ 89,90',
    features: [
      '2 Pacotes de 250g/mês',
      'Curadoria Bahia Cafés',
      'Ficha técnica do produtor'
    ]
  },
  {
    id: 'entusiasta',
    name: 'Entusiasta',
    price: 'R$ 119,90',
    features: [
      '3 Pacotes de 250g/mês',
      'Regiões diferentes a cada mês',
      'Dicas de preparo exclusivas'
    ],
    recommended: true
  },
  {
    id: 'mestre',
    name: 'Mestre Cafeeiro',
    price: 'R$ 179,90',
    features: [
      '4 Pacotes de 250g/mês',
      'Workshop online trimestral',
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
