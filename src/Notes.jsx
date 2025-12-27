// Notes.jsx

import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './Notes.css';

// ⭐ 1. Load Supabase here

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  // ⭐ 2. Fetch Notes here
  const fetchNotes = async () => {

    //  ⭐ 2a. Make Fetch Request here


    //  ⭐ 2b. Initialise notes into set function

  };

  // ⭐ 3. Create Notes here
  const addNote = async () => {
    
    //  ⭐ Fetch User here

    
     //  ⭐ 3a. Make Post Request here


    // if (error) return console.error(error);

    //  ⭐ 3b. Reset state

    //  ⭐ 3c. Initialise notes into set function
  };

  useEffect(() => {
    // ⭐ 1. Fetch All Notes here
    fetchNotes();

    // ⭐ 


    // ⭐ 

    
  }, []);

  return (
    <>
      <Navbar />
      <div className="notes-bg">
        <div className="notes-container">
          <h2>Your Notes</h2>

          <textarea
            className="note-input"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Type your note..."
          />

          <div className="add-btn-wrapper">
            <button className="add-btn" onClick={addNote}>Add Note</button>
          </div>

          <div className="note-list">
            {notes.map((note) => (
              <div key={note.id} className="note-card">
                <p>{note.content}</p>
                <small>{new Date(note.inserted_at).toLocaleString()}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
