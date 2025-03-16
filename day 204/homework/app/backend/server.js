const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
const notesFilePath = path.join(__dirname, 'notes.json');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

const readNotes = () => {
  const data = fs.readFileSync(notesFilePath, 'utf-8');
  return JSON.parse(data);
};

const writeNotes = (notes) => {
  fs.writeFileSync(notesFilePath, JSON.stringify(notes, null, 2));
};


app.get('/api/notes', (req, res) => {
  const notes = readNotes();
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const notes = readNotes();
  const newNote = {
    id: Date.now().toString(),
    title: req.body.title,
    content: req.body.content,
    timestamp: new Date().toISOString(),
  };
  notes.push(newNote);
  writeNotes(notes);
  res.status(201).json(newNote);
});

// PUT (update) a note
app.put('/api/notes/:id', (req, res) => {
  const notes = readNotes();
  const noteId = req.params.id;
  const noteIndex = notes.findIndex((note) => note.id === noteId);
  if (noteIndex === -1) {
    return res.status(404).json({ message: 'Note not found' });
  }
  notes[noteIndex] = {
    ...notes[noteIndex],
    title: req.body.title,
    content: req.body.content,
    timestamp: new Date().toISOString(),
  };
  writeNotes(notes);
  res.json(notes[noteIndex]);
});

// DELETE a note
app.delete('/api/notes/:id', (req, res) => {
  const notes = readNotes();
  const noteId = req.params.id;
  const updatedNotes = notes.filter((note) => note.id !== noteId);
  if (notes.length === updatedNotes.length) {
    return res.status(404).json({ message: 'Note not found' });
  }
  writeNotes(updatedNotes);
  res.status(204).send();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});