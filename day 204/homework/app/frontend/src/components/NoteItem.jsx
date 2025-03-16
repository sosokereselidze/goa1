import React from 'react';

const NoteItem = ({ note, onDelete, onEdit }) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <small>{new Date(note.timestamp).toLocaleString()}</small>
      <div>
        <button onClick={() => onEdit(note)}>Edit</button>
        <button onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </div>
  );
};

export default NoteItem;