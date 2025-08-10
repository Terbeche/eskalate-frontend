'use client';

import Header from '@/components/Header';
import MealManagement from '@/components/MealManagement';
import Footer from '@/components/Footer';

// Extend Window interface to include our custom function
declare global {
  interface Window {
    openAddMealModal?: () => void;
  }
}

export default function Home() {
  const handleAddMeal = () => {
    // Use the global window function to open the add meal modal
    if (typeof window !== 'undefined' && window.openAddMealModal) {
      window.openAddMealModal();
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
