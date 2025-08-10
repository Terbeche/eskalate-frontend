// Environment configuration utility
export const config = {
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'FoodWagen',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3002',
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  },
  images: {
    defaultFoodImage: process.env.NEXT_PUBLIC_DEFAULT_FOOD_IMAGE || '/api/placeholder/357/301',
    defaultLogoImage: process.env.NEXT_PUBLIC_DEFAULT_LOGO_IMAGE || '/api/placeholder/77/77',
  },
  company: {
    name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'FoodWagen',
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'info@foodwagen.com',
    phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '+1 (555) 123-4567',
  },
};

export default config;
