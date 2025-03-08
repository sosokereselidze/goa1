import express from "express";
import cors from "cors";

import tasksRouter from "./routes/tasks.route.js";

const app = express();

app.use(cors());
app.use(express.json());

//costum middlware
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

app.use("/tasks", tasksRouter);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
