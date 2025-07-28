# 86hire Backend

This is the backend API for the 86hire project, built with FastAPI and Python.

## Getting Started

### Prerequisites

- Python 3.11 or higher
- pip or poetry

### Installation

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Copy the environment variables:
```bash
cp .env.example .env
```

4. Update the `.env` file with your actual configuration values.

### Development

Run the development server:

```bash
uvicorn app.main:app --reload
```

The API will be available at [http://localhost:8000](http://localhost:8000)

API documentation will be available at [http://localhost:8000/docs](http://localhost:8000/docs)

### Database Setup

1. Set up your database connection in `.env`
2. Run migrations:
```bash
alembic upgrade head
```

### Testing

Run tests:
```bash
pytest
```

## Project Structure

```
backend/
├── app/              # Main application code
│   ├── api/         # API routes
│   ├── core/        # Core configuration
│   ├── models/      # Database models
│   ├── schemas/     # Pydantic schemas
│   └── services/    # Business logic
├── alembic/         # Database migrations
├── tests/           # Test files
├── .env.example     # Environment variables template
└── requirements.txt # Python dependencies
```

## Technologies Used

- FastAPI
- SQLAlchemy
- Alembic
- Pydantic
- Uvicorn
- pytest 