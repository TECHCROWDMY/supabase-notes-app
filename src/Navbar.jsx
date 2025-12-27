// Navbar.jsx

import './Navbar.css';

// ⭐ 1. Load Supabase here

export default function Navbar() {

  // ⭐ 2. Logout function here
  const handleLogout = async () => {
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">📝 NotesApp</h1>
      </div>
      <div className="navbar-right">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
