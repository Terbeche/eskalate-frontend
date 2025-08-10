import Image from 'next/image';
import { Food } from '@/types';

interface FoodCardProps {
  readonly food: Food;
  readonly onEdit: () => void;
  readonly onDelete: () => void;
}

export default function FoodCard({ food, onEdit, onDelete }: Readonly<FoodCardProps>) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={food.imageUrl}
          alt={food.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={onEdit}
            className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all"
            title="Edit food"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={onDelete}
            className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all"
            title="Delete food"
          >
            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-900 leading-tight">
            {food.name}
          </h3>
          <span className="font-bold text-green-600">
            {food.price}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="restaurant-name text-sm text-gray-600">
            {food.restaurantName}
          </span>
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="restaurant-rating ml-1 text-sm text-gray-600">
              {food.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
