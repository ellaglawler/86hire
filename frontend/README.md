# 86hire Frontend

This is the frontend application for the 86hire project, built with Next.js and React.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy the environment variables:
```bash
cp .env.example .env.local
```

3. Update the `.env.local` file with your actual configuration values.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
frontend/
├── public/          # Static assets
├── src/             # Source code
│   ├── components/  # React components
│   ├── pages/       # Next.js pages
│   ├── styles/      # CSS/styling files
│   └── utils/       # Utility functions
├── .env.example     # Environment variables template
└── package.json     # Dependencies and scripts
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- ESLint 