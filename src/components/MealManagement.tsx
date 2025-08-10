'use client';

import { useState, useEffect } from 'react';
import { Restaurant, Meal } from '@/types';
import config from '@/config';
import MealCard from './MealCard';
import AddMealModal from './AddMealModal';
import EditMealModal from './EditMealModal';
import DeleteMealModal from './DeleteMealModal';

export default function MealManagement() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Fetch restaurants
  const fetchRestaurants = async () => {
    try {
      const response = await fetch(`${config.app.apiUrl}/restaurants/`);
      if (response.ok) {
        const data = await response.json();
        setRestaurants(data);
      }
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  // Fetch meals
  const fetchMeals = async () => {
    try {
      const response = await fetch(`${config.app.apiUrl}/meals/`);
      if (response.ok) {
        const data = await response.json();
        setMeals(data);
      }
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  // Add meal
  const addMeal = async (mealData: Omit<Meal, 'id'>) => {
    try {
      const response = await fetch(`${config.app.apiUrl}/meals/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: mealData.name,
          description: mealData.description,
          price: mealData.price,
          image: mealData.image || config.images.defaultFoodImage,
          category: mealData.category || 'General',
          restaurant_id: mealData.restaurant_id || 1,
          status: mealData.status || 'open',
          rating: mealData.rating || 4.5,
        }),
      });

      if (response.ok) {
        await fetchMeals(); // Refresh meals list
        setShowAddModal(false);
      } else {
        console.error('Failed to add meal');
      }
    } catch (error) {
      console.error('Error adding meal:', error);
    }
  };

  // Update meal
  const updateMeal = async (meal: Meal) => {
    try {
      const response = await fetch(`${config.app.apiUrl}/meals/${meal.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: meal.name,
          description: meal.description,
          price: meal.price,
          image: meal.image,
          category: meal.category,
          restaurant_id: meal.restaurant_id,
          status: meal.status,
          rating: meal.rating,
        }),
      });

      if (response.ok) {
        await fetchMeals(); // Refresh meals list
        setShowEditModal(false);
        setSelectedMeal(null);
      } else {
        console.error('Failed to update meal');
      }
    } catch (error) {
      console.error('Error updating meal:', error);
    }
  };

  // Delete meal
  const deleteMeal = async (mealId: string) => {
    try {
      const response = await fetch(`${config.app.apiUrl}/meals/${mealId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchMeals(); // Refresh meals list
        setShowDeleteModal(false);
        setSelectedMeal(null);
      } else {
        console.error('Failed to delete meal');
      }
    } catch (error) {
      console.error('Error deleting meal:', error);
    }
  };

  // Handle edit meal
  const handleEditMeal = (meal: Meal) => {
    setSelectedMeal(meal);
    setShowEditModal(true);
  };

  // Handle delete meal
  const handleDeleteMeal = (meal: Meal) => {
    setSelectedMeal(meal);
    setShowDeleteModal(true);
  };

  // Expose addMeal function to parent
  const handleAddMeal = () => {
    setShowAddModal(true);
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchRestaurants(), fetchMeals()]);
      setLoading(false);
    };
    loadData();
  }, []);

  // Expose addMeal function to parent component
  useEffect(() => {
    (window as any).openAddMealModal = handleAddMeal;
    return () => {
      delete (window as any).openAddMealModal;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading meals...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Meals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {meals.map((meal) => (
          <MealCard
            key={meal.id}
            meal={meal}
            onEdit={handleEditMeal}
            onDelete={handleDeleteMeal}
          />
        ))}
      </div>

      {meals.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🍽️</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No meals found</h3>
          <p className="text-gray-600 mb-4">Get started by adding your first meal.</p>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Add First Meal
          </button>
        </div>
      )}

      {/* Modals */}
      <AddMealModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={addMeal}
      />

      {selectedMeal && (
        <>
          <EditMealModal
            meal={selectedMeal}
            isOpen={showEditModal}
            onClose={() => {
              setShowEditModal(false);
              setSelectedMeal(null);
            }}
            onSave={updateMeal}
          />

          <DeleteMealModal
            meal={selectedMeal}
            isOpen={showDeleteModal}
            onClose={() => {
              setShowDeleteModal(false);
              setSelectedMeal(null);
            }}
            onDelete={deleteMeal}
          />
        </>
      )}
    </div>
  );
}
