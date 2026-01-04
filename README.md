# User Card Generator

## 🌐 Live Demo
[![Live Demo](https://img.shields.io/badge/Visit_Live_Site-000?style=for-the-badge&logo=vercel&logoColor=white)]()

## Project Preview

### Desktop View
![User Card Desktop View](./public/rt5-d.png)

### Mobile View
![User Card Mobile View](./public/rt5-m.png)

## Project Overview
A modern user card generator built with React and Tailwind CSS. Create beautiful user profile cards with custom images, roles, and descriptions in a sleek, responsive interface.

## Tech Stack

**Frontend:** React 19 | JavaScript ES6+  
**Build Tool:** Vite | npm  
**Styling:** Tailwind CSS  
**Deployment:** Vercel

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Key Features
- **Create Custom Cards**: Generate user cards with name, role, description, and profile image
- **Image URL Support**: Add profile pictures via image URLs with real-time preview
- **Modern UI**: Gradient backgrounds, glassmorphism effects, and smooth animations
- **Responsive Design**: Fully responsive grid layout for all screen sizes
- **Real-time Card Count**: Track number of created cards dynamically
- **Delete Functionality**: Remove cards with single click
- **Form Validation**: Input length limits and proper form handling

## How It Works
1. **Fill the Form**: Enter user details - Name, Profile Image URL, Role, and Description
2. **Create Card**: Click "Create User Card" to generate a new card
3. **View Cards**: All cards display in a responsive grid layout
4. **Manage Cards**: Remove any card using the delete button
5. **Responsive Layout**: Automatically adapts to desktop, tablet, and mobile screens

## Components Structure
- **Card.jsx** - Main component with form and card management logic
- **CardData.jsx** - Individual card display component with delete functionality
- **Footer.jsx** - Footer with GitHub repository link
- **App.jsx** - Main application wrapper with gradient background

## Learning Outcomes
- Building React applications with functional components and hooks
- State management using useState for form data and card arrays
- Component composition and props drilling
- Form handling with controlled components
- Array manipulation for CRUD operations
- Advanced Tailwind CSS styling with gradients and animations
- Responsive design implementation
- GitHub deployment workflow

## Setup Instructions

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/shekgit/user-card.git

# Navigate to project directory
cd user-card

# Install dependencies
npm install

# Start development server
npm run dev
```

## Build for Production
```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Deployment
Deployed on **Vercel** with automatic CI/CD. Every push to main branch triggers a new deployment.

## Project Structure
```
user-card/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── CardData.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── screenshot-desktop.png
│   └── screenshot-mobile.png
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Responsive Breakpoints
- **Desktop**: 1024px and above (multiple columns)
- **Tablet**: 768px - 1023px (two-column grid)
- **Mobile**: Below 768px (single column)

## UI Features
- **Gradient Text**: Animated emoji with gradient headings
- **Glassmorphism**: Frosted glass effect on form container
- **Card Hover Effects**: Scale and shadow transitions on hover
- **Image Glow**: Gradient glow around profile images
- **Interactive Buttons**: Hover and active state animations
- **Smooth Transitions**: All interactions have smooth CSS transitions

## Performance Features
- Optimized React component re-renders
- Efficient state management
- Lightweight Tailwind CSS utility classes
- Proper image optimization with object-fit
- Clean component structure

## License
MIT License - free to use for educational and personal projects