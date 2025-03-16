import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList.jsx';
import NoteForm from './components/NoteForm.jsx';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);

  // Fetch all notes
  const fetchNotes = async () => {
    const response = await fetch('http://localhost:5000/api/notes');
    const data = await response.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Add or update a note
  const handleSubmit = async (title, content) => {
    if (editNote) {
      // Update note
      await fetch(`http://localhost:5000/api/notes/${editNote.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });
    } else {
      // Add new note
      await fetch('http://localhost:5000/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });
    }
    setEditNote(null);
    fetchNotes();
  };

  // Delete a note
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/notes/${id}`, {
      method: 'DELETE',
    });
    fetchNotes();
  };

  const handleEdit = (note) => {
    setEditNote(note);
  };

  return (
    <div>
      <h1>Notes App</h1>
      <NoteForm onSubmit={handleSubmit} editNote={editNote} />
      <NoteList notes={notes} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;