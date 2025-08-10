'use client';

import { useRef } from 'react';
import Header from '@/components/Header';
import MealManagement from '@/components/MealManagement';
import Footer from '@/components/Footer';

export default function Home() {
  const mealManagementRef = useRef<{ handleAddMeal: () => void } | null>(null);

  const handleAddMeal = () => {
    // Use the global window function to open the add meal modal
    if (typeof window !== 'undefined' && (window as any).openAddMealModal) {
      (window as any).openAddMealModal();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAddMeal={handleAddMeal} />
      <main className="container mx-auto py-8">
        <MealManagement />
      </main>
      <Footer />
    </div>
  );
}
