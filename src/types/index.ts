export interface Restaurant {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  logo: string;
  cuisine: string;
  delivery_time: string;
  delivery_fee: number;
  status: 'open' | 'closed';
}

export interface Meal {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  restaurant_id: number;
  status: 'open' | 'closed';
  discount?: string;
  rating: number;
  restaurant?: Restaurant;
}

// Legacy interface for compatibility
export interface Food extends Meal {
  imageUrl: string;
  restaurantName: string;
}
