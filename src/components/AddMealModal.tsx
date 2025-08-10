'use client';

import { useState } from 'react';
import { Meal } from '@/types';
import config from '@/config';

interface AddMealModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly onAdd: (meal: Omit<Meal, 'id'>) => void;
}

export default function AddMealModal({ isOpen, onClose, onAdd }: AddMealModalProps) {
  const [newMeal, setNewMeal] = useState<Omit<Meal, 'id'>>({
    name: '',
    description: '',
    price: 0,
    image: config.images.defaultFoodImage,
    category: '',
    restaurant_id: 1,
    status: 'open',
    rating: 4.5,
  });

  if (!isOpen) return null;

  const handleAdd = () => {
    if (newMeal.name && newMeal.price > 0) {
      onAdd(newMeal);
      setNewMeal({
        name: '',
        description: '',
        price: 0,
        image: config.images.defaultFoodImage,
        category: '',
        restaurant_id: 1,
        status: 'open',
        rating: 4.5,
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Add New Meal</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="meal-name" className="block text-sm font-medium text-gray-700 mb-1">
              Meal Name
            </label>
            <input
              id="meal-name"
              type="text"
              value={newMeal.name}
              onChange={(e) => setNewMeal({ ...newMeal, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
              placeholder="Enter meal name"
            />
          </div>

          <div>
            <label htmlFor="meal-description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="meal-description"
              value={newMeal.description}
              onChange={(e) => setNewMeal({ ...newMeal, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
              rows={3}
              placeholder="Enter meal description"
            />
          </div>

          <div>
            <label htmlFor="meal-price" className="block text-sm font-medium text-gray-700 mb-1">
              Price ($)
            </label>
            <input
              id="meal-price"
              type="number"
              value={newMeal.price}
              onChange={(e) => setNewMeal({ ...newMeal, price: parseFloat(e.target.value) || 0 })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
              step="0.01"
              min="0"
              placeholder="0.00"
            />
          </div>

                    <div>
            <label htmlFor="meal-restaurant" className="block text-sm font-medium text-gray-700 mb-1">
              Restaurant ID
            </label>
            <input
              id="meal-restaurant"
              type="number"
              value={newMeal.restaurant_id}
              onChange={(e) => setNewMeal({ ...newMeal, restaurant_id: parseInt(e.target.value) || 1 })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
              placeholder="Enter restaurant ID"
              min="1"
            />
          </div>

          <div>
            <label htmlFor="meal-category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              id="meal-category"
              type="text"
              value={newMeal.category}
              onChange={(e) => setNewMeal({ ...newMeal, category: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
              placeholder="Enter meal category"
            />
          </div>

          <div>
            <label htmlFor="meal-status" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="meal-status"
              value={newMeal.status}
              onChange={(e) => setNewMeal({ ...newMeal, status: e.target.value as 'open' | 'closed' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
            >
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
