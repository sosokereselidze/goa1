import express from "express";

// Routers
import notesRouter from "./routes/notes.router.js";

// Middleware
import cors from "cors";



const app = express();

// Usefull middleware
app.use(express.json());
app.use(cors());

// Routers middleware 
app.use("/notes", notesRouter);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})