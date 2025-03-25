import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/notes";

const Dashboard = () => {
    const [notes, setNotes] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false);
    const [updatingNoteId, setUpdatingNoteId] = useState(null);
    const [editNote, setEditNote] = useState({ title: "", content: "" });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setNotes(data);
            } catch (err) {
                console.error("Error fetching notes:", err);
            }
        };

        fetchData();
    }, []);

    const addNote = async (note) => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(note)
            });
            const data = await response.json();
            setNotes([...notes, data]);
        } catch (err) {
            console.error("Error adding note:", err);
        }
    };

    const deleteNote = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: "DELETE"
            });
            setNotes(notes.filter((note) => note.id !== id));
        } catch (err) {
            console.error("Error deleting note:", err);
        }
    };

    const updateNote = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editNote)
            });
            const updatedData = await response.json();

            setNotes(notes.map((note) => (note.id === id ? updatedData : note)));
            setIsUpdating(false);
            setUpdatingNoteId(null);
            setEditNote({ title: "", content: "" });

        } catch (err) {
            console.error("Error updating note:", err);
        }
    };

    const handleEdit = (note) => {
        setIsUpdating(true);
        setUpdatingNoteId(note.id);
        setEditNote({ title: note.title, content: note.content });
    };

    const handleUpdateSubmit = (e, id) => {
        e.preventDefault();
        updateNote(id);
    };

    return (
        <main>
            <section>
                <h2>Add New Note</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    addNote({ title: e.target.title.value, content: e.target.content.value });
                    e.target.reset();
                }}>
                    <input type="text" name="title" placeholder="Title" required />
                    <input type="text" name="content" placeholder="Content" required />
                    <button>Add Note</button>
                </form>
            </section>

            <section>
                <h2>Notes</h2>
                <table border={"1"}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notes.map((note) => (
                            <tr key={note.id}>
                                <td>{note.id}</td>
                                <td>
                                    {isUpdating && updatingNoteId === note.id ? (
                                        <input
                                            type="text"
                                            value={editNote.title}
                                            onChange={(e) => setEditNote({ ...editNote, title: e.target.value })}
                                        />
                                    ) : (
                                        note.title
                                    )}
                                </td>
                                <td>
                                    {isUpdating && updatingNoteId === note.id ? (
                                        <input
                                            type="text"
                                            value={editNote.content}
                                            onChange={(e) => setEditNote({ ...editNote, content: e.target.value })}
                                        />
                                    ) : (
                                        note.content
                                    )}
                                </td>
                                <td>
                                    {isUpdating && updatingNoteId === note.id ? (
                                        <>
                                            <button onClick={(e) => handleUpdateSubmit(e, note.id)}>Save</button>
                                            <button onClick={() => setIsUpdating(false)}>Cancel</button>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={() => handleEdit(note)}>Update</button>
                                            <button onClick={() => deleteNote(note.id)}>Delete</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default Dashboard;
