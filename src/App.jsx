// App.jsx

import { useEffect, useState } from 'react';
import Auth from './Auth';
import Notes from './Notes';

// ⭐ 1. Load Supabase here


function App() {
  // Sessions should be null by default;
  const [session, setSession] = useState(false);

  // ⭐ 2. Load Supabase Auth Session here


  return session ? <Notes /> : <Auth />;

}

export default App;
