// App.jsx

import { useEffect, useState } from 'react';
import Auth from './Auth';
import Notes from './Notes';

// ⭐ 1. Load Supabase here
import { supabase } from './supabase';

function App() {
  // Sessions should be null by default;
  const [session, setSession] = useState(false);

  // ⭐ 2. Load Supabase Auth Session here
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return session ? <Notes /> : <Auth />;

}

export default App;
