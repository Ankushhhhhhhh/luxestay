export interface Listing {
  id: string;
  title: string;
  location: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  category: string;
  host: {
    name: string;
    image: string;
    isSuperhost: boolean;
  };
  amenities: string[];
  distance: string;
  dates: string;
}

export const CATEGORIES = [
  { label: 'Amazing pools', icon: 'Waves' },
  { label: 'Cabins', icon: 'Home' },
  { label: 'Beachfront', icon: 'Palmtree' },
  { label: 'Countryside', icon: 'Mountain' },
  { label: 'Tiny homes', icon: 'Tent' },
  { label: 'Design', icon: 'Paintbrush' },
  { label: 'Arctic', icon: 'Snowflake' },
  { label: 'Caves', icon: 'MountainSnow' },
  { label: 'Surfing', icon: 'Wind' },
  { label: 'Bed & breakfasts', icon: 'Coffee' },
  { label: 'Tropical', icon: 'Sun' },
  { label: 'Castles', icon: 'Castle' },
];

export const MOCK_LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'Modern Villa with Infinity Pool',
    location: 'Santorini, Greece',
    description: 'A stunning modern villa overlooking the Aegean Sea with a private infinity pool and sunset views.',
    price: 450,
    rating: 4.95,
    reviews: 128,
    images: [
      'https://picsum.photos/seed/villa1/1000/1000',
      'https://picsum.photos/seed/villa2/1000/1000'
    ],
    category: 'Amazing pools',
    host: {
      name: 'Eleni',
      image: 'https://i.pravatar.cc/150?u=eleni',
      isSuperhost: true
    },
    amenities: ['Pool', 'Wifi', 'Kitchen', 'Free parking'],
    distance: '2,450 miles away',
    dates: 'Jun 10 - 15'
  },
  {
    id: '2',
    title: 'Cozy A-Frame Cabin in the Woods',
    location: 'Lake Tahoe, California',
    description: 'Escape to this charming A-frame cabin nestled among towering pines. Perfect for a quiet getaway.',
    price: 225,
    rating: 4.88,
    reviews: 85,
    images: [
      'https://picsum.photos/seed/cabin1/1000/1000',
      'https://picsum.photos/seed/cabin2/1000/1000'
    ],
    category: 'Cabins',
    host: {
      name: 'Mark',
      image: 'https://i.pravatar.cc/150?u=mark',
      isSuperhost: false
    },
    amenities: ['Fireplace', 'Wifi', 'Kitchen', 'Hot tub'],
    distance: '120 miles away',
    dates: 'Jul 5 - 10'
  },
  {
    id: '3',
    title: 'Luxury Beachfront Apartment',
    location: 'Malibu, California',
    description: 'Wake up to the sound of waves in this beautifully designed beachfront apartment with floor-to-ceiling windows.',
    price: 600,
    rating: 4.98,
    reviews: 210,
    images: [
      'https://picsum.photos/seed/beach1/1000/1000',
      'https://picsum.photos/seed/beach2/1000/1000'
    ],
    category: 'Beachfront',
    host: {
      name: 'Sarah',
      image: 'https://i.pravatar.cc/150?u=sarah',
      isSuperhost: true
    },
    amenities: ['Beach access', 'Wifi', 'Kitchen', 'Air conditioning'],
    distance: '15 miles away',
    dates: 'Aug 1 - 6'
  },
  {
    id: '4',
    title: 'Rustic Farmhouse in the Hills',
    location: 'Tuscany, Italy',
    description: 'Experience the authentic Tuscan lifestyle in this restored 18th-century farmhouse surrounded by vineyards.',
    price: 320,
    rating: 4.92,
    reviews: 156,
    images: [
      'https://picsum.photos/seed/farm1/1000/1000',
      'https://picsum.photos/seed/farm2/1000/1000'
    ],
    category: 'Countryside',
    host: {
      name: 'Giuseppe',
      image: 'https://i.pravatar.cc/150?u=giuseppe',
      isSuperhost: true
    },
    amenities: ['Vineyard views', 'Wifi', 'Kitchen', 'Washer'],
    distance: '6,100 miles away',
    dates: 'Sep 12 - 17'
  },
  {
    id: '5',
    title: 'Minimalist Glass House',
    location: 'Reykjavik, Iceland',
    description: 'A unique architectural masterpiece offering panoramic views of the Northern Lights from the comfort of your bed.',
    price: 550,
    rating: 4.99,
    reviews: 42,
    images: [
      'https://picsum.photos/seed/design1/1000/1000',
      'https://picsum.photos/seed/design2/1000/1000'
    ],
    category: 'Design',
    host: {
      name: 'Bjorn',
      image: 'https://i.pravatar.cc/150?u=bjorn',
      isSuperhost: true
    },
    amenities: ['Northern lights view', 'Wifi', 'Kitchen', 'Heating'],
    distance: '3,800 miles away',
    dates: 'Oct 20 - 25'
  },
  {
    id: '6',
    title: 'Eco-Friendly Bamboo Hut',
    location: 'Bali, Indonesia',
    description: 'Immerse yourself in nature in this sustainable bamboo hut located in the heart of the Balinese jungle.',
    price: 180,
    rating: 4.85,
    reviews: 312,
    images: [
      'https://picsum.photos/seed/tropical1/1000/1000',
      'https://picsum.photos/seed/tropical2/1000/1000'
    ],
    category: 'Tropical',
    host: {
      name: 'Wayan',
      image: 'https://i.pravatar.cc/150?u=wayan',
      isSuperhost: false
    },
    amenities: ['Jungle views', 'Wifi', 'Outdoor shower', 'Breakfast included'],
    distance: '8,200 miles away',
    dates: 'Nov 1 - 6'
  },
  {
    id: '7',
    title: 'Historic Castle Suite',
    location: 'Edinburgh, Scotland',
    description: 'Live like royalty in a private suite within a 15th-century castle, complete with antique furnishings and a grand fireplace.',
    price: 750,
    rating: 4.97,
    reviews: 64,
    images: [
      'https://picsum.photos/seed/castle1/1000/1000',
      'https://picsum.photos/seed/castle2/1000/1000'
    ],
    category: 'Castles',
    host: {
      name: 'Alistair',
      image: 'https://i.pravatar.cc/150?u=alistair',
      isSuperhost: true
    },
    amenities: ['Fireplace', 'Wifi', 'Library', 'Garden'],
    distance: '5,000 miles away',
    dates: 'Dec 15 - 20'
  },
  {
    id: '8',
    title: 'Modern Loft in the City Center',
    location: 'Tokyo, Japan',
    description: 'A sleek and stylish loft in the heart of Shibuya, just steps away from the world\'s busiest crossing.',
    price: 280,
    rating: 4.91,
    reviews: 189,
    images: [
      'https://picsum.photos/seed/tokyo1/1000/1000',
      'https://picsum.photos/seed/tokyo2/1000/1000'
    ],
    category: 'Design',
    host: {
      name: 'Yuki',
      image: 'https://i.pravatar.cc/150?u=yuki',
      isSuperhost: false
    },
    amenities: ['City views', 'Wifi', 'Kitchen', 'Elevator'],
    distance: '5,500 miles away',
    dates: 'Jan 10 - 15'
  }
];
