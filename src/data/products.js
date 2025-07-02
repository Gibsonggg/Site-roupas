import heroModel from '../assets/hero-model.jpg';
import blusaCasual from '../assets/blusa-casual.jpg';
import vestidoMidi from '../assets/vestido-midi.jpg';
import outfitBeigeRosa from '../assets/outfit-beige-pink.jpg';
import modelSmiling from '../assets/model-smiling.jpg';

export const products = [
  {
    id: 1,
    name: 'Blusa Casual Elegante',
    price: 129.90,
    originalPrice: null,
    images: [blusaCasual, heroModel, modelSmiling],
    category: 'blusas',
    colors: ['#F5F1ED', '#E8B4B8', '#D4949A'],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Blusa casual elegante confeccionada em tecido de alta qualidade. Perfeita para o dia a dia com um toque sofisticado.',
    details: [
      'Tecido: 95% Algodão, 5% Elastano',
      'Modelagem: Regular',
      'Manga: Curta',
      'Decote: V',
      'Cuidados: Lavar à máquina em água fria'
    ],
    featured: true,
    inStock: true,
    stockQuantity: 15
  },
  {
    id: 2,
    name: 'Vestido Midi Sofisticado',
    price: 189.90,
    originalPrice: null,
    images: [vestidoMidi, outfitBeigeRosa],
    category: 'vestidos',
    colors: ['#4A4A4A', '#E8B4B8'],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Vestido midi com design sofisticado, ideal para ocasiões especiais ou um look elegante no trabalho.',
    details: [
      'Tecido: 100% Viscose',
      'Modelagem: Ajustada no busto, solta na cintura',
      'Comprimento: Midi',
      'Decote: Quadrado',
      'Cuidados: Lavar à mão ou lavagem delicada'
    ],
    featured: true,
    inStock: true,
    stockQuantity: 8
  },
  {
    id: 3,
    name: 'Conjunto Bege e Rosa',
    price: 249.90,
    originalPrice: 299.90,
    images: [outfitBeigeRosa, vestidoMidi],
    category: 'conjuntos',
    colors: ['#F5F1ED', '#E8B4B8'],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Conjunto coordenado em tons neutros, perfeito para criar looks versáteis e elegantes.',
    details: [
      'Tecido: 90% Algodão, 10% Elastano',
      'Inclui: Blusa e calça',
      'Modelagem: Confortável',
      'Estilo: Casual chic',
      'Cuidados: Lavar à máquina em água fria'
    ],
    featured: true,
    inStock: true,
    stockQuantity: 5,
    isOnSale: true
  },
  {
    id: 4,
    name: 'Look Completo Primavera',
    price: 299.90,
    originalPrice: null,
    images: [modelSmiling, heroModel],
    category: 'looks',
    colors: ['#FFFFFF', '#F5F1ED'],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Look completo para a primavera, combinando conforto e estilo em uma única peça.',
    details: [
      'Tecido: Linho e algodão',
      'Inclui: Peça única versátil',
      'Modelagem: Fluida',
      'Estilo: Boho chic',
      'Cuidados: Lavar à mão'
    ],
    featured: true,
    inStock: true,
    stockQuantity: 12
  },
  {
    id: 5,
    name: 'Blusa Romântica',
    price: 149.90,
    originalPrice: null,
    images: [heroModel, blusaCasual],
    category: 'blusas',
    colors: ['#E8B4B8', '#FFFFFF', '#F5F1ED'],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Blusa com detalhes românticos, ideal para compor looks femininos e delicados.',
    details: [
      'Tecido: 100% Viscose',
      'Modelagem: Solta',
      'Manga: Longa',
      'Decote: Redondo',
      'Cuidados: Lavagem delicada'
    ],
    featured: false,
    inStock: true,
    stockQuantity: 20
  },
  {
    id: 6,
    name: 'Vestido Floral Verão',
    price: 199.90,
    originalPrice: 239.90,
    images: [vestidoMidi, modelSmiling],
    category: 'vestidos',
    colors: ['#E8B4B8', '#F5F1ED', '#FFFFFF'],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Vestido floral perfeito para os dias quentes de verão, com estampa delicada e tecido leve.',
    details: [
      'Tecido: 100% Algodão',
      'Modelagem: Evasê',
      'Comprimento: Midi',
      'Decote: V',
      'Cuidados: Lavar à máquina'
    ],
    featured: false,
    inStock: true,
    stockQuantity: 7,
    isOnSale: true
  }
];

export const categories = [
  {
    id: 'blusas',
    name: 'Blusas',
    description: 'Elegantes e confortáveis',
    icon: 'Checkroom'
  },
  {
    id: 'vestidos',
    name: 'Vestidos',
    description: 'Para todas as ocasiões',
    icon: 'Person'
  },
  {
    id: 'conjuntos',
    name: 'Conjuntos',
    description: 'Looks coordenados',
    icon: 'Inventory'
  },
  {
    id: 'looks',
    name: 'Looks Completos',
    description: 'Estilo completo',
    icon: 'Star'
  }
];

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  if (!category || category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getOnSaleProducts = () => {
  return products.filter(product => product.isOnSale);
};

