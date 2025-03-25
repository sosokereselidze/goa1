import express from 'express';
import { readFile, updateFile } from '../utils/jsonFunc.js';

const notesRouter = express.Router();

// Get all notes
notesRouter.get('/', (req, res) => {
    const data = readFile();
    res.json(data);
});

// Add note
notesRouter.post('/', (req, res) => {
    const { title, content } = req.body;
    const note = {title, content, id: Date.now()};

    updateFile(note, "add");

    res.json(note);
})


// Update note
notesRouter.put('/:id', (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;
        
    // Collect only provided fields for updating
    const updateData = {};
    if (title) updateData.title = title;
    if (content) updateData.content = content;

    // If no valid fields are provided, return an error response
    if (Object.keys(updateData).length === 0) {
        return res.status(400).json({ message: "Update info not found" });
    }

    // Update the file
    const updatedNote = updateFile(updateData, "update", parseInt(id));

    if (!updatedNote) {
        return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(updatedNote);
});

// Delete note
notesRouter.delete("/:id", (req, res) => {
    const { id } = req.params;

    const deletedNote = updateFile(null, "delete", parseInt(id));

    if (!deletedNote) {
        return res.status(404).json({ message: "Note not found" });
    }

    res.json(deletedNote);
})

export default notesRouter;
