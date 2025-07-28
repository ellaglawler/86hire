86hire

86hire is a lightweight, AI-powered Applicant Tracking System (ATS) built for small businesses—especially in high-turnover industries like restaurants, retail, and hospitality. We streamline hiring by helping business owners quickly identify reliable, customer-friendly candidates without wasting time on bad fits.

This is a full-stack web application built using Next.js on the frontend and FastAPI on the backend, structured as a monorepo for seamless development.

⸻

🔧 Project Structure

86hire/
│
├── frontend/               # Next.js frontend (React 18 + TypeScript)
│   ├── public/             # Static assets
│   ├── src/                # Application source code
│   ├── .env.example        # Frontend environment config template
│   ├── package.json        # Frontend dependencies
│   └── README.md           # Frontend-specific documentation
│
├── backend/                # FastAPI backend
│   ├── app/                # Backend application code
│   ├── .env.example        # Backend environment config template
│   ├── requirements.txt    # Backend dependencies
│   └── README.md           # Backend-specific documentation
│
├── .gitignore              # Git ignore rules
└── README.md               # Project overview (this file)


⸻

🚀 Quick Start

Prerequisites
	•	Node.js (v18+)
	•	Python (v3.11+)
	•	Git

⸻

⚙️ Local Development Setup

1. Clone the repository

git clone <repository-url>
cd 86hire


⸻

2. Set up the Frontend

cd frontend
npm install
cp .env.example .env.local
# Fill out .env.local with any required values
npm run dev

Access the frontend at: http://localhost:3000

⸻

3. Set up the Backend

cd backend
python -m venv venv
source venv/bin/activate      # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Fill out .env with database/API credentials
uvicorn app.main:app --reload

Access the backend at:
	•	API Base: http://localhost:8000
	•	API Docs: http://localhost:8000/docs

⸻

🧪 Running Tests

Frontend

cd frontend
npm test

Backend

cd backend
pytest


⸻

📦 Production Build

Frontend

cd frontend
npm run build

Backend

cd backend
# Ensure production env vars are set
uvicorn app.main:app --host 0.0.0.0 --port 8000


⸻

🤝 Contributing
	1.	Fork this repo
	2.	Create a feature branch (git checkout -b feature/your-feature)
	3.	Commit your changes
	4.	Push to your fork
	5.	Submit a Pull Request

Please write clean code, include helpful comments, and add tests for any new logic.

⸻

📄 License

[Insert your license here – e.g., MIT, GPL, etc.]

⸻

🆘 Support

For questions, bugs, or feature requests:
	•	Create an issue on GitHub
	•	Or contact the dev team directly
