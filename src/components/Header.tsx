'use client';

import { useState } from 'react';
import config from '@/config';

interface HeaderProps {
  onAddMeal?: () => void;
}

export default function Header({ onAddMeal }: Readonly<HeaderProps>) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('delivery');

  return (
    <div className="flex flex-col items-center w-full">
      {/* Top Nav - Professional sizing */}
      <nav className="flex flex-row items-center justify-between w-full h-16 bg-white px-6 md:px-12 lg:px-20 py-3 shadow-sm border-b border-gray-100">
        {/* Logo */}
        <div className="flex flex-row items-center gap-3">
          {/* Simplified Logo Design */}
          <div className="relative w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">🍔</span>
          </div>
          
          {/* Logo Text */}
          <h1 
            className="text-gray-900"
            style={{
              fontFamily: 'Source Sans Pro',
              fontWeight: 700,
              fontSize: '24px'
            }}
          >
            {config.app.name}
          </h1>
        </div>

        {/* Add Meal Button and Login */}
        <div className="flex flex-row items-center gap-4">
          {/* Add Meal Button */}
          {onAddMeal && (
            <button 
              onClick={onAddMeal}
              className="flex flex-row justify-center items-center px-4 py-2 gap-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-md"
            >
              <span className="text-lg">+</span>
              <span className="font-semibold">Add Meal</span>
            </button>
          )}
        </div>
      </nav>

      {/* Header Section */}
      <div className="relative w-full h-[628px] bg-[#FFB30E] overflow-hidden">
        {/* Title + Order Card */}
        <div className="absolute left-[220px] top-[132px] flex flex-col gap-8 w-[856px] h-[355.44px]">
          {/* Title */}
          <div className="flex flex-col justify-center gap-[15px] w-[666px] h-[129px]">
            <p 
              className="w-[666px] h-[88px] text-white leading-[100%]"
              style={{
                fontFamily: 'Source Sans Pro',
                fontWeight: 700,
                fontSize: '60px',
                textShadow: '0px 14px 15px rgba(255, 174, 0, 0.01), 0px 27px 82px rgba(255, 174, 0, 0.28)'
              }}
            >
              Are you starving?
            </p>
            <p 
              className="w-[532px] h-[26px] text-white leading-[120%]"
              style={{
                fontFamily: 'Source Sans Pro',
                fontWeight: 400,
                fontSize: '22px'
              }}
            >
              Within a few clicks, find meals that are accessible near you
            </p>
          </div>

          {/* Order Card */}
          <div className="flex flex-col w-[856px] h-[194.44px] bg-white rounded-2xl shadow-[0px_5px_10px_rgba(255,174,0,0.26),0px_20px_40px_rgba(255,174,0,0.29)]">
            {/* Top Tabs */}
            <div className="flex flex-row items-start px-6 py-6 gap-2 w-full h-[86px] bg-white rounded-t-2xl">
              <button 
                className={`flex flex-row items-start px-6 py-[10px] gap-[10px] w-[148px] h-[38px] rounded-lg ${
                  activeTab === 'delivery' 
                    ? 'bg-[rgba(241,114,40,0.1)]' 
                    : 'bg-transparent'
                }`}
                onClick={() => setActiveTab('delivery')}
              >
                <span 
                  className={`w-[23px] h-[18px] leading-[100%] ${
                    activeTab === 'delivery' ? 'text-[#F17228]' : 'text-[#757575]'
                  }`}
                  style={{
                    fontSize: '18px'
                  }}
                >
                  🚚
                </span>
                <span 
                  className={`w-[83px] h-[18px] leading-[100%] ${
                    activeTab === 'delivery' ? 'text-[#F17228]' : 'text-[#757575]'
                  }`}
                  style={{
                    fontFamily: 'Source Sans Pro',
                    fontWeight: 700,
                    fontSize: '18px'
                  }}
                >
                  Delivery
                </span>
              </button>

              <button 
                className={`flex flex-row items-start px-6 py-[10px] gap-[10px] w-[129px] h-[38px] rounded-lg ${
                  activeTab === 'pickup' 
                    ? 'bg-[rgba(241,114,40,0.1)]' 
                    : 'bg-transparent'
                }`}
                onClick={() => setActiveTab('pickup')}
              >
                <span 
                  className={`w-4 h-[18px] leading-[100%] ${
                    activeTab === 'pickup' ? 'text-[#F17228]' : 'text-[#757575]'
                  }`}
                  style={{
                    fontSize: '18px'
                  }}
                >
                  🏪
                </span>
                <span 
                  className={`w-[55px] h-[18px] leading-[100%] ${
                    activeTab === 'pickup' ? 'text-[#F17228]' : 'text-[#757575]'
                  }`}
                  style={{
                    fontFamily: 'Source Sans Pro',
                    fontWeight: 700,
                    fontSize: '18px'
                  }}
                >
                  Pickup
                </span>
              </button>
            </div>

            {/* Divider */}
            <div className="w-full h-[0.44px] border-t border-[#EEEEEE]"></div>

            {/* Search Section */}
            <div className="flex flex-row items-center px-6 py-4 gap-4 w-full h-[108px] bg-white rounded-b-2xl">
              <div className="flex flex-row items-center gap-4 flex-1">
                <div className="flex flex-col gap-2 flex-1">
                  <span className="text-sm text-gray-600 font-medium">Search for food</span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search food"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
                  />
                </div>
                
                <button 
                  className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Find Food
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
