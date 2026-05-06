# Capstone Project — Full-Stack Blog Application

## 📖 Overview

A full-stack blog application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). Features role-based access control with three user types: **User** (reader), **Author** (writer), and **Admin** (manager).

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React (Vite), React Router |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose |
| **Auth** | JWT (HTTP-only cookies), bcryptjs |
| **File Upload** | Multer (memory storage) + Cloudinary |
| **CORS** | cors middleware with credentials |

## 📁 Project Structure

```
CapstoneProject/
├── Blog app/                # Backend (Express.js)
│   ├── server.js            # Entry point — app setup, DB connection
│   ├── APIs/
│   │   ├── commonAPI.js     # Auth routes (register, login, logout)
│   │   ├── userAPI.js       # User routes (read articles, comment)
│   │   ├── authorAPI.js     # Author routes (CRUD articles)
│   │   └── adminAPI.js      # Admin routes (manage users)
│   ├── models/
│   │   ├── userModel.js     # User schema (all roles)
│   │   └── articleModel.js  # Article + Comment schemas
│   ├── middlewares/
│   │   └── verifyToken.js   # JWT verification + role checking
│   ├── config/
│   │   ├── cloudinary.js    # Cloudinary SDK config
│   │   ├── cloudinaryUpload.js  # Upload helper (Buffer → Cloudinary)
│   │   └── multer.js        # File upload config (2MB, JPG/PNG only)
│   ├── package.json
│   └── .env                 # Environment variables (not committed)
└── frontend/                # Frontend (React + Vite)
```

## 🔌 API Endpoints

### Auth (`/auth`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/users` | Register (with profile image) |
| POST | `/auth/login` | Login (returns JWT cookie) |
| GET | `/auth/logout` | Logout (clears cookie) |
| GET | `/auth/check-auth` | Validate token on refresh |
| PUT | `/auth/password` | Change password |

### User (`/user-api`) — Role: USER
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/user-api/article` | Read all active articles |
| PUT | `/user-api/article` | Add comment to an article |

### Author (`/author-api`) — Role: AUTHOR
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/author-api/article` | Create article |
| GET | `/author-api/article` | Read own articles |
| PUT | `/author-api/article` | Update article |
| PATCH | `/author-api/article` | Soft delete/restore |

### Admin (`/admin-api`) — Role: ADMIN
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin-api/users` | List all users/authors |
| PATCH | `/admin-api/users/status` | Block/activate account |

## ▶️ How to Run

```bash
# Backend
cd "Blog app"
npm install
# Create .env file with: DB_URL, SECRET_KEY, PORT, FRONTEND_URL,
#   CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
node server.js

# Frontend
cd ../frontend
npm install
npm run dev
```

## 👤 Author

**N Sri Nihal** — [@NSriNihal](https://github.com/NSriNihal)
