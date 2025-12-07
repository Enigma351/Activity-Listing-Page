My Learning – React + Vite

My Learning is a fully responsive activity dashboard built with React, Vite, Tailwind CSS, and Lucide Icons.
It provides an intuitive interface for learners to track online classes, quizzes, assignments, and discussions.
This project follows a component-driven architecture, leverages reusable hooks, supports light/dark themes, and is optimized for a mobile-first experience.

Features
Dashboard & Activities

Displays multiple types of learning activities

Status indicators: Completed, In Progress, Overdue, Not Started

Detailed metadata for each activity type

A responsive card layout that adapts to all device sizes

Filtering & Sorting System

Search by activity title or program

Filter by:

Program

Type

Status

Sort activities by Most Recent or Due Date

Clear all filters with one action

Visual badge showing the number of active filters

Dark Mode Support

One-click theme toggle

Smooth transitions

Theme-aware components and text colors

UI/UX Highlights

Clean, semantic, accessible components

Mobile-first layout with no horizontal overflow

Keyboard-friendly interactive elements

Ensures consistency across light/dark themes

Tech Stack
Core

React 18

Vite

Tailwind CSS

Lucide React Icons

State & Utilities

Custom hooks:

useActivities

useFilters

useTheme

Utility helpers for:

Date formatting

Static constants

Reusable components: ActivityCard, Header, FilterPanel, StatsCard, EmptyState

Build Tools

Vite development server

ESLint with recommended rules

Hot Module Reloading (HMR)

Prerequisites

You will need:

Node.js

npm, yarn, or pnpm

Installation

Install dependencies:

npm install

Running the Development Server
npm run dev

Building for Production
npm run build

Previewing the Production Build
npm run preview

ESLint
npm run lint

Styling

The project uses Tailwind CSS with custom global styles located in index.css, including:

Theme-aware colors

Scrollbar customization

Button utilities

Focus styles for accessibility

Responsive layout utility classes

Tailwind config file:

tailwind.config.js


The production build outputs to:

dist/

Next Steps

Based on the assignment expectations and room for further enhancement, below are possible next steps:

1. Mobile-App Build (React Native / Expo)

Implement a mobile version using React Native while reusing core logic and constants

Maintain shared business logic through a /shared folder

Add instructions for building Android or iOS apps

2. API Integration

Replace mock data with live API responses using fetch/axios

Add loading and error states

Implement pagination or infinite scrolling if needed

3. Testing

Add unit tests for hooks and components using Jest + React Testing Library

Snapshot tests for UI consistency

4. Performance Enhancements

Memoize heavy operations

Code-splitting and lazy loading for improved load times

Pre-compute derived values for rendering efficiency

5. Accessibility Improvements

Ensure ARIA labels where applicable

Expand keyboard interaction support

Maintain WCAG-compliant contrast ratios

6. Additional Features

User profile section with activity summaries

Progress tracking charts

Local storage or backend sync of filter + theme preferences

7. Extend Multiplatform Support

Explore frameworks like Expo Router or React Native Web to unify web and mobile builds more deeply
