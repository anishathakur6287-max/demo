# Jawaharlal Nehru University (JNU) - MERN Web Application

A full-stack University Web Portal for Jawaharlal Nehru University built using the **MERN** stack (MongoDB Atlas, Express.js, React, Node.js) featuring a modern university homepage, degree explorer, campus life showcase, and authentication system (Sign Up, Sign In, and Student/Faculty Portal Dashboard).

---

## 🏛️ Features

- **Collegiate Luxury & Tech Design**: Custom CSS design system with deep imperial navy (`#070d18`), academic gold (`#f59e0b`), royal cyan (`#38bdf8`), and glassmorphism.
- **Dynamic University Homepage**:
  - **Hero Section**: Accreditations, ranking badges, and CTAs.
  - **Key Metrics & Statistics**: Real-time counters for students, placements, and research grants.
  - **Academic Disciplines & Programs Showcase**: Filterable explorer for AI, Medicine, Aerospace, MBA, and Green Energy.
  - **Campus Life & Research Hubs**: Pillars highlighting quantum labs, faculty laureates, eco-campus, and startup incubation.
  - **Campus Announcements & Events**: Academic updates, symposiums, and fellowship news.
  - **Alumni Spotlights**: Graduate placements (Google, DeepMind, NASA) and testimonials.
  - **Responsive Footer**: Multi-column links, contact details, and newsletter subscription.
- **Full Authentication System (Sign Up & Login)**:
  - **Sign Up (`/signup`)**: Full Name, Academic Email, Role Selection (Student, Faculty, Staff, Alumni), Department, Password strength meter, and Honor Code agreement.
  - **Sign In (`/login`)**: Email/Password authentication, Role selector, Remember Me, and 1-click Quick Demo prefill buttons.
  - **Password Hashing**: Secure encryption via `bcryptjs`.
  - **JWT Authorization**: Session management via JSON Web Tokens and token header interceptor.
  - **Student / Member Dashboard (`/dashboard`)**: Digital Holographic Student ID card, GPA & credit progress, enrolled curriculum schedule, and notifications.
- **Resilient MongoDB Layer**: Connects to MongoDB via Mongoose with auto-fallback for seamless local development.

---

## 📂 Project Architecture

```
d:/anisha/
├── backend/
│   ├── config/
│   │   └── db.js               # MongoDB connection & status
│   ├── controllers/
│   │   └── authController.js   # Register, login, getMe logic
│   ├── middleware/
│   │   └── authMiddleware.js   # JWT verification middleware
│   ├── models/
│   │   └── User.js             # Mongoose User schema & model
│   ├── routes/
│   │   └── authRoutes.js       # Express Auth API endpoints
│   ├── .env                    # Environment configuration
│   ├── package.json            # Backend dependencies
│   └── server.js               # Express application entry point
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CampusFeatures.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NewsEvents.jsx
│   │   │   ├── Programs.jsx
│   │   │   ├── Stats.jsx
│   │   │   └── Testimonials.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx # Auth state, login/signup/logout
│   │   ├── pages/
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── SignupPage.jsx
│   │   ├── services/
│   │   │   └── api.js          # REST API client
│   │   ├── App.jsx             # Routes & ProtectedRoute
│   │   ├── index.css           # Design tokens & styles
│   │   └── main.jsx            # React root
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── package.json                # Root automation scripts
└── README.md
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
# In the root directory (d:/anisha)
npm run install:all
```
*Or install individually:*
```bash
cd backend && npm install
cd ../frontend && npm install
```

### 2. Start Backend Server (Port 5000)
```bash
cd backend
npm run dev
# Or: node server.js
```

### 3. Start Frontend App (Port 5173)
```bash
cd frontend
npm run dev
```

### 4. Open in Browser
Visit **`http://localhost:5173`** to access the live university portal!
