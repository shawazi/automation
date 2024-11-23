# Daemon Automation Frontend

A modern, responsive web application built with React and TypeScript for business process automation.

## Features

- Clean, modern UI with Material-UI components
- Responsive design with mobile-first approach
- Smooth page transitions and animations
- TypeScript for enhanced type safety
- Fast development with Vite

## Tech Stack

- React 18.3
- TypeScript
- Vite
- Material-UI 5.15
- React Router DOM 7.0
- React Spring for animations

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/shawazi/automation.git
cd daemon-automation
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── assets/        # Static assets
└── App.tsx        # Main application component
```

## Development

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Maintain consistent file and component naming
- Use Material-UI's sx prop for styling

### Routing

Routes are defined in `App.tsx`:
- `/` - Home
- `/about` - About Us
- `/contact` - Contact Form
- `/faq` - FAQ
- `/terms` - Terms of Service

## Building for Production

```bash
npm run build
```

This will create a `dist` directory with optimized production build.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[License Type] - See LICENSE file for details

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [Material-UI](https://mui.com/)
- [React Spring](https://www.react-spring.dev/)
