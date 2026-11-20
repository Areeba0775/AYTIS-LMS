# AYTI'S Academy Management System

A full-stack academy administration starter built with React + Vite, Express, Mongoose and MongoDB.

## Requirements
- Node.js 20+
- MongoDB local service or MongoDB Atlas connection string

## Setup (Windows PowerShell)
1. Install Node.js and MongoDB (or create a MongoDB Atlas cluster).
2. Open this folder in VS Code.
3. Copy `backend/.env.example` to `backend/.env` and set `MONGO_URI`.
4. In the project root run:
   ```powershell
   npm install
   npm run install:all
   npm run dev
   ```
5. Open http://localhost:5173

Backend API: http://localhost:5000/api

## Seed sample data
With the backend running, open another terminal in `backend` and run:
```powershell
npm run seed
```
Seed inserts sample records only when collections are empty.

## Deployment
- Frontend: deploy `frontend` to Vercel; set `VITE_API_URL` to your deployed backend URL plus `/api`.
- Backend: deploy `backend` to Render/Railway/Fly.io; configure `MONGO_URI`, `PORT`, and `CLIENT_URL`.
- Use MongoDB Atlas for hosted database. Do not use localhost MongoDB in production.

## Notes
This initial version intentionally has no login/JWT/bcrypt. Protect the admin API with authentication before public production use.
