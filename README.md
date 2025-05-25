
# 🏥 Care Tech - Patient Registration App

A modern **React + PGlite** app for registering and managing patient records. It runs entirely in the browser with **PostgreSQL-compatible SQL**, persistent storage using **OPFS**, and **Web Worker** support for performance.

---

## ⚙️ Features

- 📋 Patient form with validation  
- 💾 Offline-first with persistent browser storage  
- 🚀 SQL runs locally in a Web Worker (via PGlite)  
- 🔄 React + ElectricSQL integration  
- 📦 Zero external database/server dependencies

---

## 🧱 Tech Stack

- **React + TypeScript** – UI and typesafety  
- **@electric-sql/pglite** – PostgreSQL-compatible DB in the browser  
- **Web Workers** – Non-blocking DB execution  
- **Vite** – Lightning-fast dev/build tool

---

## 📁 Folder Structure

```
.
├── public/
├── src/
│   ├── components/
│   │   ├── FormComponents/
│   │   │   ├── PatientList.tsx                # Displays registered patients
│   │   │   ├── PatientRegistrationForm.tsx    # Form for new patient registration
│   │   │   ├── SqlQueryInterface.tsx          # Raw SQL querying interface
│   │   └── PatientRegistrationApp.tsx         # Main component managing the app
│   ├── App.tsx                                # DB setup, context provider
│   ├── main.tsx                               # Root React render
│   ├── pglite-worker.js                       # Web worker for PGlite (ElectricSQL)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🧑‍💻 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm (comes with Node)

---

### 📦 Install & Run

#### 1. Clone the repo

```bash
git clone https://github.com/Hemanth2709/care-tech.git
cd care-tech
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Run in development

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🏗️ Build & Preview

#### Build for production

```bash
npm run build
```

#### Preview production build locally

```bash
npm run preview
```

---

## 🧠 How It Works

- A PostgreSQL-like database is created in-browser using [`@electric-sql/pglite`](https://electric-sql.com/docs/pglite/overview)  
- Runs inside a Web Worker using Vite’s `?worker` syntax  
- Uses **Origin Private File System** (`opfs-ahp://`) for persistent storage  
- DB is wrapped in a React context (`PGliteProvider`) for use throughout the app

---

## 🗃️ Database Schema

Created automatically on first load:

```sql
CREATE TABLE IF NOT EXISTS patients (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  date_of_birth DATE,
  gender VARCHAR(10),
  address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🚀 Deployment Guide

### 📦 Deploy on Vercel

```bash
# Push your code to GitHub first, then:
# 1. Go to https://vercel.com
# 2. Import your GitHub repo
# 3. Use default Vite settings
```

---

## 🌐 Browser Support

| Browser  | Support          |
|----------|------------------|
| Chrome   | ✅ Full           |
| Firefox  | ⚠️ Limited OPFS   |
| Safari   | ⚠️ Experimental   |
| Edge     | ✅ Full           |

---

## 📚 Resources

- [ElectricSQL Docs](https://electric-sql.com/docs/pglite/overview)  
- [Vite Docs](https://vitejs.dev)
- [Vercel Docs](https://vercel.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [ESLint Docs](https://eslint.org/docs/)