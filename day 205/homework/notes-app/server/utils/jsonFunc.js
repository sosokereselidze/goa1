import fs from "fs";

const PATH = 'C:/Users/User/Desktop/Notes/server/notes.json';

export const readFile = () => {
    try {
        const data = JSON.parse(fs.readFileSync(PATH));
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const updateFile = (data, action, id) => {
    try {
        const notes = readFile();

        if (action === "add") {
            notes.push(data);
            fs.writeFileSync(PATH, JSON.stringify(notes));
            return;
        } else if (action === "update") {
            const index = notes.findIndex(note => note.id === id);

            if (index === -1) {
                console.log(`Note with ID ${id} not found.`);
                return;
            }

            notes[index] = { ...notes[index], ...data };

            fs.writeFileSync(PATH, JSON.stringify(notes));

            return notes[index];

        } else if(action === "delete") {
            const index = notes.findIndex(note => note.id === id);

            if (index === -1) {
                console.log(`Note with ID ${id} not found.`);
                return;
            }

            const deletedNote = notes[index];

            notes.splice(index, 1);

            fs.writeFileSync(PATH, JSON.stringify(notes));

            return deletedNote;
        } else {
            console.log("Invalid action provided.");
            return;
        }
        
    } catch (err) {
        console.error("Error updating file:", err);
    }
};
