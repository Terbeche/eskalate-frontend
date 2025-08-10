# Eskalate Full Stack Assessment - Frontend Implementation

## Implementation Path

**Path B (Frontend-Focused)**: This project focuses on building a pixel-perfect frontend based on the Figma design. The implementation includes:

- ✅ **Header Component** with complex logo design and hero section
- ✅ **Featured Restaurant Section** with restaurant cards and ratings
- ✅ **Newsletter Subscription** with interactive form
- ✅ **Footer Component** with company information and social links
- ✅ **Responsive Design** following Figma specifications
- ✅ **Interactive Elements** with proper hover states and functionality

## Tech Stack

- **Next.js 15.4.6** with App Router
- **React 19.1.0** with TypeScript
- **Tailwind CSS 4** for styling
- **Google Fonts** (Source Sans Pro & Open Sans)

## Features Implemented

### 🎨 **Figma Design Compliance**

- Exact color matching (#FFB30E, #F17228, #212121, etc.)
- Precise typography with Source Sans Pro and Open Sans
- Proper spacing, shadows, and gradient effects
- Complex logo design with multiple layered elements

### 🏗️ **Component Architecture**

- Reusable and modular components
- Proper TypeScript interfaces
- Clean separation of concerns
- Accessibility best practices

### 📱 **Responsive Design**

- Mobile-first approach
- Flexible layouts with proper breakpoints
- Optimized images with Next.js Image component

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3002](http://localhost:3002) to view the application.

## Project Structure

```typescript
src/
├── app/
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── Header.tsx         # Top navigation and hero
│   ├── FeaturedRestaurants.tsx  # Restaurant grid
│   └── Footer.tsx         # Footer with links
└── types/
    └── index.ts           # TypeScript interfaces
```

## Design Implementation

The implementation closely follows the provided Figma design with:

- **Full-width sections** with proper centering
- **Gradient backgrounds** and shadow effects
- **Interactive elements** with proper states
- **Typography hierarchy** matching design specs
- **Color consistency** throughout the application

## Assessment Compliance

This implementation meets the assessment requirements by:

- ✅ Following the **Path B** approach (frontend-focused)
- ✅ Using **descriptive component names** and proper structure
- ✅ Implementing **semantic HTML** with accessibility
- ✅ Creating **reusable components** with clean code
- ✅ Using **TypeScript** for type safety
- ✅ Following **Next.js best practices**

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
