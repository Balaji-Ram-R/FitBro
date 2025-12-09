# FitBro - Fitness Application

A comprehensive fitness application built with React, Node.js, and MongoDB featuring meal planning, workout sessions, trainer bookings, and video calls.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)
- Google Gemini API key
- ZEGO Cloud account
- Clerk account

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd FitBro
   ```

2. **Install frontend dependencies**
   ```bash
   cd project
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

## ⚙️ Environment Variables Setup

### Backend Environment Variables (`project/server/.env`)

Create a `.env` file in the `project/server/` directory with the following variables:

```env
# Server Port (default: 5000)
PORT=5000

# MongoDB Connection URI
MONGODB_URI=your_mongodb_connection_string

# Google Gemini API Key (for meal plan generation)
GENERATIVE_API_KEY=your_gemini_api_key
```

### Frontend Environment Variables (`project/.env`)

Create a `.env` file in the `project/` directory with the following variables:

```env
# Clerk Publishable Key (for authentication)
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# ZEGO App ID (for video calls)
VITE_ZEGO_APP_ID=your_zego_app_id

# ZEGO Server Secret (for video calls)
VITE_ZEGO_SERVER_SECRET=your_zego_server_secret
```

## 🔑 How to Get Environment Variables

### 1. MongoDB URI

**Option A: MongoDB Atlas (Cloud)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Create a new cluster (free tier available)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database password
7. Replace `<dbname>` with your database name (e.g., `Fitbro`)

**Format:**
```
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority
```

**Option B: Local MongoDB**
```
mongodb://localhost:27017/fitbro
```

### 2. Google Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key
5. Add it to `GENERATIVE_API_KEY` in your `.env` file

**Note:** The API uses `gemini-2.5-flash` model by default. Make sure your API key has access to Gemini models.

### 3. Clerk Publishable Key

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Sign up or log in
3. Create a new application (or select existing)
4. Go to "API Keys" in the sidebar
5. Copy the **Publishable Key** (starts with `pk_test_` or `pk_live_`)
6. Add it to `VITE_CLERK_PUBLISHABLE_KEY` in your `.env` file

**Note:** 
- Use `pk_test_` for development
- Use `pk_live_` for production
- The key should be prefixed with `VITE_` to be accessible in Vite

### 4. ZEGO App ID and Server Secret

1. Go to [ZEGO Cloud Console](https://console.zegocloud.com/)
2. Sign up or log in
3. Create a new project
4. Go to "Project Settings" → "Basic Info"
5. Copy the **App ID** (numeric value)
6. Go to "Project Settings" → "Server Secret"
7. Copy the **Server Secret** (32-character string)
8. Add them to your `.env` file:
   - `VITE_ZEGO_APP_ID=your_app_id`
   - `VITE_ZEGO_SERVER_SECRET=your_server_secret`

**Note:** 
- App ID is a numeric value (e.g., `801669669`)
- Server Secret is a 32-character hexadecimal string
- Both should be prefixed with `VITE_` for Vite

## 🏃 Running the Application

### Start Backend Server

```bash
cd project/server
npm start
```

The server will run on `http://localhost:5000` (or the port specified in your `.env`)

### Start Frontend Development Server

```bash
cd project
npm run dev
```

The frontend will run on `http://localhost:5173` (or the next available port)

## 📁 Project Structure

```
FitBro/
├── project/
│   ├── src/                 # React frontend source code
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service functions
│   │   └── ...
│   ├── server/              # Backend server
│   │   ├── server.js        # Express server and API routes
│   │   └── .env            # Backend environment variables
│   ├── .env                # Frontend environment variables
│   └── package.json        # Frontend dependencies
└── README.md               # This file
```

## 🔧 Configuration

### Port Configuration

The backend server uses port `5000` by default. You can change it by:

1. Setting `PORT` in `project/server/.env`
2. Or modifying the default in `project/server/server.js`:
   ```javascript
   const PORT = process.env.PORT || 5000;
   ```

### MongoDB Configuration

The MongoDB URI is configured in `project/server/server.js`. You can:

1. Set `MONGODB_URI` in `project/server/.env`
2. Or modify directly in `server.js` (not recommended for production)

## 🛠️ Features

- ✅ User authentication with Clerk
- ✅ Meal plan generation using Google Gemini AI
- ✅ Workout planning and tracking
- ✅ Trainer booking system
- ✅ Video call sessions with ZEGO Cloud
- ✅ Pose correction features
- ✅ Fitness goal tracking

## 📝 Notes

- **Environment Variables**: Never commit `.env` files to version control
- **API Keys**: Keep your API keys secure and never expose them in client-side code
- **MongoDB**: Ensure your MongoDB cluster allows connections from your IP address
- **Clerk**: Configure allowed origins in Clerk dashboard for your domain
- **ZEGO**: Server Secret should only be used server-side (currently hardcoded in VideoCallPage.jsx - consider moving to backend)

## 🐛 Troubleshooting

### Backend Issues

- **MongoDB Connection Error**: Check your MongoDB URI and ensure your IP is whitelisted
- **Port Already in Use**: Change the PORT in `.env` or kill the process using port 5000
- **Gemini API Errors**: Verify your API key and check API quotas

### Frontend Issues

- **Clerk Not Working**: Verify `VITE_CLERK_PUBLISHABLE_KEY` is set correctly
- **ZEGO Video Calls Not Working**: Check `VITE_ZEGO_APP_ID` and `VITE_ZEGO_SERVER_SECRET`
- **Environment Variables Not Loading**: Ensure variables are prefixed with `VITE_` and restart the dev server

## 📄 License

This project was created for HACKNOVATE 6.0

## 👥 Contributors

- FitBro Development Team

---

For more information or support, please refer to the documentation or contact the development team.
