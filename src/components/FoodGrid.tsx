import { Food } from '@/types';
import FoodCard from './FoodCard';

interface FoodGridProps {
  foods: Food[];
  onEdit: (food: Food) => void;
  onDelete: (id: string) => void;
}

export default function FoodGrid({ foods, onEdit, onDelete }: FoodGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
          onEdit={() => onEdit(food)}
          onDelete={() => onDelete(food.id.toString())}
        />
      ))}
    </div>
  );
}
