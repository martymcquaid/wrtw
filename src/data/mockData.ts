import { Product, Category, Review } from '../types';

export const categories: Category[] = [
  {
    id: 'dogs',
    name: 'Dogs',
    description: 'Everything for your canine companion',
    image: '/images/categories/dogs.jpg',
    color: 'bg-blue-500',
    subcategories: ['Food', 'Toys', 'Beds', 'Collars & Leashes', 'Grooming', 'Training', 'Health', 'Clothing']
  },
  {
    id: 'cats',
    name: 'Cats',
    description: 'Premium supplies for your feline friend',
    image: '/images/categories/cats.jpg',
    color: 'bg-purple-500',
    subcategories: ['Food', 'Toys', 'Litter', 'Scratching', 'Beds', 'Grooming', 'Health', 'Carriers']
  },
  {
    id: 'birds',
    name: 'Birds',
    description: 'Essentials for your feathered friends',
    image: '/images/categories/birds.jpg',
    color: 'bg-green-500',
    subcategories: ['Food', 'Cages', 'Toys', 'Perches', 'Health', 'Grooming', 'Nesting']
  },
  {
    id: 'fish',
    name: 'Fish',
    description: 'Complete aquarium and fish care',
    image: '/images/categories/fish.jpg',
    color: 'bg-cyan-500',
    subcategories: ['Tanks', 'Food', 'Filters', 'Decorations', 'Heating', 'Lighting', 'Water Care']
  },
  {
    id: 'reptiles',
    name: 'Reptiles',
    description: 'Habitats and supplies for reptiles',
    image: '/images/categories/reptiles.jpg',
    color: 'bg-orange-500',
    subcategories: ['Terrariums', 'Food', 'Heating', 'Lighting', 'Substrate', 'Decorations', 'Health']
  },
  {
    id: 'small-animals',
    name: 'Small Animals',
    description: 'For rabbits, guinea pigs, and more',
    image: '/images/categories/small-animals.jpg',
    color: 'bg-pink-500',
    subcategories: ['Cages', 'Food', 'Bedding', 'Toys', 'Grooming', 'Health', 'Exercise']
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Chicken Dog Treats',
    price: 12.99,
    originalPrice: 18.99,
    description: 'All-natural chicken treats made with real chicken breast. No artificial preservatives, colors, or flavors.',
    category: 'dogs',
    subcategory: 'Food',
    image: '/images/products/dog-treats.jpg',
    images: ['/images/products/dog-treats-1.jpg', '/images/products/dog-treats-2.jpg', '/images/products/dog-treats-3.jpg'],
    rating: 4.8,
    reviewCount: 234,
    inStock: true,
    stockCount: 45,
    brand: 'PetDelights',
    features: ['100% natural chicken', 'Grain-free', 'High in protein', 'Made in USA'],
    size: ['Small (5oz)', 'Medium (10oz)', 'Large (20oz)'],
    tags: ['treats', 'training', 'natural'],
    isOnSale: true,
    discount: 32
  },
  {
    id: '2',
    name: 'Interactive Cat Toy Set',
    price: 24.99,
    description: '3-piece interactive toy set with feather wand, laser pointer, and crinkle balls to keep your cat entertained for hours.',
    category: 'cats',
    subcategory: 'Toys',
    image: '/images/products/cat-toy-set.jpg',
    images: ['/images/products/cat-toy-set-1.jpg', '/images/products/cat-toy-set-2.jpg'],
    rating: 4.6,
    reviewCount: 189,
    inStock: true,
    stockCount: 23,
    brand: 'KittyPlay',
    features: ['3 different toys', 'Encourages exercise', 'Mental stimulation', 'Safe materials'],
    tags: ['toys', 'interactive', 'exercise'],
    isNew: true
  },
  {
    id: '3',
    name: 'Orthopedic Dog Bed',
    price: 89.99,
    description: 'Memory foam orthopedic bed provides superior comfort for dogs of all ages, especially seniors with joint issues.',
    category: 'dogs',
    subcategory: 'Beds',
    image: '/images/products/dog-bed.jpg',
    images: ['/images/products/dog-bed-1.jpg', '/images/products/dog-bed-2.jpg', '/images/products/dog-bed-3.jpg'],
    rating: 4.9,
    reviewCount: 412,
    inStock: true,
    stockCount: 18,
    brand: 'ComfortPaws',
    features: ['Memory foam', 'Waterproof liner', 'Machine washable', 'Non-slip bottom'],
    size: ['Small (24x18)', 'Medium (36x27)', 'Large (48x36)', 'Extra Large (60x48)'],
    color: ['Gray', 'Brown', 'Navy', 'Burgundy'],
    tags: ['beds', 'orthopedic', 'comfort', 'senior']
  },
  {
    id: '4',
    name: 'Automatic Pet Feeder',
    price: 79.99,
    description: 'Programmable automatic feeder with portion control, voice recording, and smartphone app control.',
    category: 'dogs',
    subcategory: 'Food',
    image: '/images/products/auto-feeder.jpg',
    images: ['/images/products/auto-feeder-1.jpg', '/images/products/auto-feeder-2.jpg'],
    rating: 4.5,
    reviewCount: 156,
    inStock: true,
    stockCount: 8,
    brand: 'TechPet',
    features: ['Programmable schedule', 'Portion control', 'Voice recording', 'App control'],
    size: ['4L capacity', '6L capacity'],
    tags: ['feeder', 'automatic', 'tech', 'convenience'],
    isNew: true
  },
  {
    id: '5',
    name: 'Cat Tree with Condo',
    price: 149.99,
    description: '6-foot tall cat tree with multiple perches, scratching posts, and enclosed condo for climbing and lounging.',
    category: 'cats',
    subcategory: 'Furniture',
    image: '/images/products/cat-tree.jpg',
    images: ['/images/products/cat-tree-1.jpg', '/images/products/cat-tree-2.jpg', '/images/products/cat-tree-3.jpg'],
    rating: 4.7,
    reviewCount: 298,
    inStock: true,
    stockCount: 12,
    brand: 'CatHaven',
    features: ['6 feet tall', 'Multiple perches', 'Scratching posts', 'Enclosed condo'],
    color: ['Beige', 'Gray'],
    tags: ['cat tree', 'furniture', 'scratching', 'climbing']
  },
  {
    id: '6',
    name: 'Dog Training Clicker',
    price: 8.99,
    description: 'Professional training clicker with wrist strap and training guide for positive reinforcement training.',
    category: 'dogs',
    subcategory: 'Training',
    image: '/images/products/training-clicker.jpg',
    images: ['/images/products/training-clicker-1.jpg'],
    rating: 4.4,
    reviewCount: 89,
    inStock: true,
    stockCount: 67,
    brand: 'TrainSmart',
    features: ['Loud click', 'Comfortable grip', 'Wrist strap', 'Training guide'],
    color: ['Black', 'Blue', 'Red', 'Green'],
    tags: ['training', 'clicker', 'behavior', 'positive-reinforcement']
  },
  {
    id: '7',
    name: 'Bird Cage with Stand',
    price: 129.99,
    description: 'Spacious wrought iron bird cage with stand, seed guards, and multiple perches for medium-sized birds.',
    category: 'birds',
    subcategory: 'Cages',
    image: '/images/products/bird-cage.jpg',
    images: ['/images/products/bird-cage-1.jpg', '/images/products/bird-cage-2.jpg'],
    rating: 4.6,
    reviewCount: 145,
    inStock: true,
    stockCount: 15,
    brand: 'AvianHome',
    features: ['Wrought iron', 'Removable tray', 'Seed guards', 'Multiple perches'],
    size: ['18x18x24', '24x18x30'],
    color: ['Black', 'White'],
    tags: ['cage', 'birds', 'spacious', 'stand']
  },
  {
    id: '8',
    name: 'Fish Tank Starter Kit',
    price: 89.99,
    description: 'Complete 10-gallon aquarium starter kit with filter, heater, LED light, and decorations.',
    category: 'fish',
    subcategory: 'Tanks',
    image: '/images/products/fish-tank.jpg',
    images: ['/images/products/fish-tank-1.jpg', '/images/products/fish-tank-2.jpg'],
    rating: 4.5,
    reviewCount: 203,
    inStock: true,
    stockCount: 22,
    brand: 'AquaLife',
    features: ['10 gallon tank', 'LED lighting', 'Filter included', 'Heater included'],
    tags: ['aquarium', 'starter kit', 'fish', 'complete set']
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    customerName: 'Sarah Johnson',
    rating: 5,
    title: 'My dog loves these treats!',
    content: 'These are by far the best dog treats I\'ve ever purchased. My golden retriever goes crazy for them and they\'re made with quality ingredients.',
    date: '2024-01-15',
    helpful: 23,
    verified: true
  },
  {
    id: '2',
    productId: '1',
    customerName: 'Mike Chen',
    rating: 4,
    title: 'Good quality, but expensive',
    content: 'The treats are high quality and my dog enjoys them, but they are a bit pricey compared to other options.',
    date: '2024-01-10',
    helpful: 12,
    verified: true
  },
  {
    id: '3',
    productId: '3',
    customerName: 'Emily Rodriguez',
    rating: 5,
    title: 'Perfect for my senior dog',
    content: 'My 12-year-old lab has arthritis and this bed has made such a difference. He sleeps much better and seems more comfortable.',
    date: '2024-01-08',
    helpful: 34,
    verified: true
  }
];

export const featuredProducts = products.filter(p => p.rating >= 4.5).slice(0, 8);
export const newArrivals = products.filter(p => p.isNew);
export const saleProducts = products.filter(p => p.isOnSale);