# ⚡ React + Vite + Supabase Starter Template
A starter template built with **React** and **Vite**, designed to help you **get started quickly with Supabase**.
This template includes **authentication** and a **simple CRUD notes system**, so you can focus on building features instead of wiring up the basics.
---
## 🧑‍💻 Getting Started
```bash
npm install
```
---
## 🏃 Run the App
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.
---
## 🎯 Purpose
This project is meant to serve as a **starting point** for applications that need:
- A fast React setup using Vite
- Supabase authentication (sign up, sign in, sign out)
- A real-world CRUD example using Supabase
- A clean and minimal structure that's easy to extend
---
## ✨ Features
- 🔐 **Authentication**
  - Email & password sign up
  - Login & logout
  - Auth session handling
- 📝 **Notes CRUD**
  - Create notes
  - Read notes (user-specific)
  - Update notes
  - Delete notes
---
## 📦 Code Segments to Include

### 1. Load Supabase
```javascript
// ⭐ 1. Load Supabase here
// import { supabase } from './supabase';
```

### 2. Load Supabase Auth Session
```javascript
// ⭐ 2. Load Supabase Auth Session here
useEffect(() => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session);
  });

  supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session);
  });
}, []);
```

### 3. Login with Google
```javascript
// ⭐ 3. Login with Google
const handleGoogleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: import.meta.env.PROD
        ? 'https://react-supabase-notes-app.netlify.app'
        : 'http://localhost:5173/',
    },
  });
  
  if (error) alert(error.message);
};
```

---
**Built with ❤️ using React, Vite, and Supabase**