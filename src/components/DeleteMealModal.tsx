'use client';

import { Meal } from '@/types';

interface DeleteMealModalProps {
  readonly meal: Meal;
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly onDelete: (mealId: string) => void;
}

export default function DeleteMealModal({ meal, isOpen, onClose, onDelete }: DeleteMealModalProps) {
  if (!isOpen) return null;

  const handleDelete = () => {
    onDelete(meal.id.toString());
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Delete Meal</h2>
        
        <p className="text-gray-700 mb-6">
          Are you sure you want to delete &quot;{meal.name}&quot;? This action cannot be undone.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="flex-1 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
