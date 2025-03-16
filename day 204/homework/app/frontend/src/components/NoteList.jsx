import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Your Notes</h2>
      {notes.length === 0 ? (
        <p>No notes available. Add a note to get started!</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
};

export default NoteList;