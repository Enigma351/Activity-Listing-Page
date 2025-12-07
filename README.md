Learning Dashboard – React + Vite

A fully responsive learning activity dashboard built with React, Vite, Tailwind CSS, and Lucide Icons. This project provides a clean UI for tracking online classes, assignments, quizzes, and discussions, with advanced filtering, sorting, theming, and statistics.

The application demonstrates component-driven architecture, reusable hooks, dark mode state management, and mobile-first responsive design.

Features
Dashboard & Activities

Displays learning activities such as quizzes, assignments, classes, and discussions.

Status indicators including completed, in progress, overdue, and not started.

Dynamic details for each activity type.

Responsive grid layout that adapts to all screen sizes.

Filtering & Sorting System

Search by title or program.

Filter by:

Program

Activity type

Status

Sort by recent or due date.

Clear all filters with one click.

Filter counter badge to track active filters.

Dark Mode Support

Persistent theme toggle (light/dark).

Smooth transitions between modes.

Dark-mode-aware components and styles.

UI/UX Highlights

Clean, semantic, responsive components.

Mobile-first layout with safe containers.

Accessible interactions with focus styles.

No horizontal overflow on any device.

Tech Stack
Core

React 18

Vite

Tailwind CSS

Lucide React Icons

State & Utilities

Custom hooks: useActivities, useFilters, useTheme

Utility functions for formatting dates and managing constants

Component-based reusable UI elements

Build Tools

Vite development server and build pipeline

ESLint with recommended rules

Hot Module Reloading (HMR)

Folder Structure
project/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── ActivityCard.jsx
│   │   ├── FilterPanel.jsx
│   │   ├── Header.jsx
│   │   ├── StatsCard.jsx
│   │   └── EmptyState.jsx
│   │
│   ├── hooks/
│   │   ├── useActivities.js
│   │   ├── useFilters.js
│   │   └── useTheme.js
│   │
│   ├── utils/
│   │   ├── dateUtils.js
│   │   └── constants.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .eslintrc.cjs
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js

Getting Started
Prerequisites

Ensure the following are installed:

Node.js 

npm or yarn or pnpm


Installation

Install all dependencies:

npm install


or

yarn install

Running the Development Server

Start the local dev server with HMR:

npm run dev


Vite will start the application at:

http://localhost:5173

Building for Production

Generate the optimized production build:

npm run build


This creates a dist/ folder with minified assets.

Previewing the Production Build

Use Vite’s preview command:

npm run preview

ESLint Configuration

This project includes ESLint for code quality.
To run linting:

npm run lint


You can extend the configuration by modifying .eslintrc.cjs.

Styling

The application uses Tailwind CSS with custom global styles located in index.css, including:

Theme-aware colors

Scrollbar styling

Button utilities

Focus-ring accessibility styles

Responsive layout classes

Tailwind config is defined in:

tailwind.config.js

Deployment

You can deploy the production build to:

Netlify

Vercel

GitHub Pages

AWS Amplify

Firebase Hosting

The dist/ folder contains the final optimized build for deployment.

License

This project is open-source and available under the MIT License.
