# User Card Generator

## Live Demo
[![Live Demo](https://img.shields.io/badge/Visit_Live_Site-000?style=for-the-badge&logo=vercel&logoColor=white)](https://user-card-mocha-eight.vercel.app/)

## Project Preview

### Desktop View
![User Card Desktop View](./public/rt5-d.png)

### Mobile View
![User Card Mobile View](./public/rt5-m.png)

## Project Overview
A modern user card generator built with React and Tailwind CSS. Create beautiful user profile cards with custom images, roles, and descriptions in a sleek, responsive interface. Data persists across page reloads using browser localStorage.

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
- **Persistent Storage**: Cards saved in browser's localStorage (survive page reloads)
- **Image URL Support**: Add profile pictures via image URLs with real-time preview
- **Modern UI**: Gradient backgrounds, glassmorphism effects, and smooth animations
- **Responsive Design**: Fully responsive grid layout for all screen sizes
- **Real-time Card Count**: Track number of created cards dynamically
- **Delete Functionality**: Remove cards with single click (updates localStorage)
- **Form Validation**: Input length limits and proper form handling

## How It Works
1. **Fill the Form**: Enter user details - Name, Profile Image URL, Role, and Description
2. **Create Card**: Click "Create User Card" to generate a new card
3. **Auto-save**: Cards automatically saved to localStorage
4. **Page Reload**: Cards persist after refresh/browser restart
5. **View Cards**: All cards display in a responsive grid layout
6. **Manage Cards**: Remove any card - automatically updates localStorage
7. **Responsive Layout**: Automatically adapts to desktop, tablet, and mobile screens

## Components Structure
- **Card.jsx** - Main component with form, card management, and localStorage logic
- **CardData.jsx** - Individual card display component with delete functionality
- **Footer.jsx** - Footer with GitHub repository link
- **App.jsx** - Main application wrapper with gradient background

## localStorage Implementation
The app uses browser's localStorage to persist user data:
- **Automatic Loading**: Cards load from localStorage on app startup
- **Real-time Sync**: Every card addition/deletion updates localStorage
- **Data Persistence**: Cards survive page reloads, browser restarts, and tab closures
- **No Server Required**: All data stored locally in user's browser

## Learning Outcomes
- Building React applications with functional components and hooks
- State management using useState for form data and card arrays
- Component composition and props drilling
- Form handling with controlled components
- Array manipulation for CRUD operations
- **LocalStorage integration for data persistence**
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
│   │   ├── Card.jsx        # Main card logic with localStorage
│   │   ├── CardData.jsx    # Individual card component
│   │   └── Footer.jsx      # Footer with GitHub link
│   ├── App.jsx             # Main app wrapper
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
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
- **Gradient Text**: Animated headings with gradient colors
- **Glassmorphism**: Frosted glass effect on form container
- **Card Hover Effects**: Scale and shadow transitions on hover
- **Image Glow**: Gradient glow around profile images
- **Interactive Buttons**: Hover and active state animations
- **Smooth Transitions**: All interactions have smooth CSS transitions
- **Data Persistence**: localStorage integration for seamless user experience

## Performance Features
- Optimized React component re-renders
- Efficient state management with useEffect
- Lightweight Tailwind CSS utility classes
- Proper image optimization with object-fit
- Clean component structure
- LocalStorage operations optimized to prevent performance issues

## Recent Updates
- **Added localStorage support** - Cards now persist across sessions
- **Automatic data sync** - Real-time updates between state and storage
- **Improved user experience** - No data loss on page refresh
- **Production-ready persistence** - Reliable local data storage

## License
MIT License - free to use for educational and personal projects
---
**Note**: This app stores all data locally in your browser. Clear browser data will remove all saved cards.