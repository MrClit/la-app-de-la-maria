# La App de la Maria

A modern, multilingual web application built with React, TypeScript, and Vite. The app allows users to upload or capture a photo, select an option (like or hate), and view a random animal image based on their choice. It features state management with Redux Toolkit and supports multiple languages via i18next.

## Features

- 📸 Upload or capture a photo using your device's camera
- 👍👎 Choose between "like" or "hate" options
- 🐶 Get a random animal image from an external API
- 🌐 Multilingual support (Catalan, Spanish, English)
- 🗂️ Global state management with Redux Toolkit
- 🎨 Responsive and accessible UI with Material UI

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

### Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

- `src/` — Main source code
  - `components/` — React components grouped by feature
  - `lang/` — Translation files (ca, es, en)
  - `store/` — Redux Toolkit store and slices
  - `i18n.ts` — i18next configuration
  - `App.tsx` — Main app component
- `public/` — Static assets
- `index.html` — Main HTML file

## Technologies Used
- React 19
- TypeScript
- Vite
- Redux Toolkit
- i18next & react-i18next
- Material UI
- ESLint & Prettier

## License

This project is for educational and demonstration purposes.
