'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Meal } from '@/types';
import config from '@/config';

interface MealCardProps {
  readonly meal: Meal;
  readonly onEdit: (meal: Meal) => void;
  readonly onDelete: (meal: Meal) => void;
}

export default function MealCard({ meal, onEdit, onDelete }: MealCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMenu(false);
    onEdit(meal);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMenu(false);
    onDelete(meal);
  };

  // Close menu when clicking outside
  const handleCardClick = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  return (
    <div 
      className="relative flex flex-col gap-4 w-full max-w-[357px] rounded-2xl bg-white shadow-sm"
      onClick={handleCardClick}
    >
      {/* Food Photo */}
      <div className="relative w-full h-[240px] bg-gray-100 rounded-2xl overflow-hidden">
        <Image 
          src={meal.image || config.images.defaultFoodImage} 
          alt={meal.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Status Badge */}
        <div className="absolute left-4 top-4 flex gap-2">
          <div className={`flex items-center px-3 py-1 rounded-lg text-sm font-semibold ${
            meal.status === 'open' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {meal.status === 'open' ? 'Open' : 'Closed'}
          </div>
          {meal.discount && (
            <div className="flex items-center px-3 py-1 bg-orange-500 rounded-lg text-sm font-semibold text-white">
              {meal.discount}
            </div>
          )}
        </div>

        {/* Three Dots Menu */}
        <div className="absolute bottom-4 right-4">
          <button
            onClick={handleMenuToggle}
            className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            aria-label="Menu options"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-600"
            >
              <circle cx="8" cy="3" r="1.5" fill="currentColor" />
              <circle cx="8" cy="8" r="1.5" fill="currentColor" />
              <circle cx="8" cy="13" r="1.5" fill="currentColor" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[100px] z-10">
              <button
                onClick={handleEdit}
                className="flex items-center w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="flex items-center w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Meal Info */}
      <div className="px-4 pb-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-100 rounded-full overflow-hidden flex-shrink-0">
              <Image 
                src={meal.restaurant?.logo || config.images.defaultLogoImage} 
                alt={`${meal.restaurant?.name || 'Restaurant'} logo`}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm text-gray-600 font-medium truncate">
              {meal.restaurant?.name || 'Unknown Restaurant'}
            </span>
          </div>
          {!!(meal.rating && meal.rating > 0) && (
            <div className="flex items-center gap-1 flex-shrink-0">
              <span className="text-yellow-400 text-sm">★</span>
              <span className="text-sm font-medium text-gray-700">
                {meal.rating.toFixed(1)}
              </span>
            </div>
          )}
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
          {meal.name}
        </h3>
        
        {meal.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {meal.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${meal.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
