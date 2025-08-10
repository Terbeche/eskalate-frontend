import { Food, Restaurant } from '@/types';

const API_BASE_URL = 'http://localhost:8000/';

// Food API functions
export const foodAPI = {
  getAll: async (searchTerm?: string): Promise<Food[]> => {
    const url = searchTerm 
      ? `${API_BASE_URL}/foods?name=${encodeURIComponent(searchTerm)}`
      : `${API_BASE_URL}/foods`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch foods');
    }
    return response.json();
  },

  create: async (food: Omit<Food, 'id'>): Promise<Food> => {
    const response = await fetch(`${API_BASE_URL}/foods`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(food),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create food');
    }
    return response.json();
  },

  update: async (id: string, food: Omit<Food, 'id'>): Promise<Food> => {
    const response = await fetch(`${API_BASE_URL}/foods/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(food),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update food');
    }
    return response.json();
  },

  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/foods/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete food');
    }
  },
};

// Restaurant API functions
export const restaurantAPI = {
  getAll: async (searchTerm?: string): Promise<Restaurant[]> => {
    const url = searchTerm 
      ? `${API_BASE_URL}/restaurants?name=${encodeURIComponent(searchTerm)}`
      : `${API_BASE_URL}/restaurants`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch restaurants');
    }
    return response.json();
  },

  create: async (restaurant: Omit<Restaurant, 'id'>): Promise<Restaurant> => {
    const response = await fetch(`${API_BASE_URL}/restaurants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(restaurant),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create restaurant');
    }
    return response.json();
  },

  update: async (id: string, restaurant: Omit<Restaurant, 'id'>): Promise<Restaurant> => {
    const response = await fetch(`${API_BASE_URL}/restaurants/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(restaurant),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update restaurant');
    }
    return response.json();
  },

  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/restaurants/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete restaurant');
    }
  },
};
