# 86hire

A full-stack web application for hiring and recruitment management.

## Project Structure

This project is organized as a monorepo with separate frontend and backend applications:

```
86hire/
│
├── frontend/               # React/Next.js frontend application
│   ├── public/            # Static assets
│   ├── src/               # Source code
│   ├── .env.example       # Environment variables template
│   ├── package.json       # Node.js dependencies
│   └── README.md          # Frontend-specific documentation
│
├── backend/                # FastAPI backend application
│   ├── app/               # Main backend application code
│   ├── .env.example       # Environment variables template
│   ├── requirements.txt    # Python dependencies
│   └── README.md          # Backend-specific documentation
│
├── .gitignore             # Git ignore rules
└── README.md              # This file - project overview
```

## Quick Start

### Prerequisites

- **Node.js** (version 18 or higher) for frontend
- **Python** (version 3.11 or higher) for backend
- **Git** for version control

### Development Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd 86hire
   ```

2. **Set up the Frontend:**
   ```bash
   cd frontend
   npm install
   cp .env.example .env.local
   # Edit .env.local with your configuration
   npm run dev
   ```

3. **Set up the Backend:**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   cp .env.example .env
   # Edit .env with your configuration
   uvicorn app.main:app --reload
   ```

4. **Access the applications:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

## Technology Stack

### Frontend
- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **ESLint** - Code linting

### Backend
- **FastAPI** - Python web framework
- **SQLAlchemy** - ORM
- **Alembic** - Database migrations
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server

## Development

### Running Tests

**Frontend:**
```bash
cd frontend
npm test
```

**Backend:**
```bash
cd backend
pytest
```

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
```

**Backend:**
```bash
cd backend
# Set up production environment variables
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

[Add your license information here]

## Support

For questions or support, please [create an issue](link-to-issues) or contact the development team.