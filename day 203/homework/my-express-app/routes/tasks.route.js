import express from "express";

const tasksRouter = express.Router();

const tasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false }
]

// Get all tasks 
tasksRouter.get("/", (req, res) => {
    const { completed } = req.query;

    if(completed === undefined) {
        return res.json(tasks);
    } else if(completed === "true") {
        return res.json(tasks.filter(task => task.completed === true));
    } else {
        return res.json(tasks.filter(task => task.completed === false));
    }
});


// Get elkement by id
tasksRouter.get("/:id", (req, res) => {
    const task = tasks.find(task => task.id === parseInt(req.params.id));

    if(!task) return res.status(404).json({ message: "Task not found" });

    return res.json(task)
});

// Create a new task
tasksRouter.post("/", (req, res) => {
    const { title } = req.body;
    const newTask = { id: Date.now(), title, completed: false };
    tasks.push(newTask);
    res.json(newTask);
});

// Delete a task
tasksRouter.delete("/:id", (req, res) => {
    const index = tasks.findIndex(task => task.id === parseInt(req.params.id));
    
    if(index === -1) return res.status(404).json({ message: "Task not found" });

    tasks.splice(index, 1);
    res.status(204).json(tasks);
})

// Update a task
tasksRouter.put("/:id", (req, res) => {
    const { title, completed } = req.body;
    const index = tasks.findIndex(task => task.id === parseInt(req.params.id));
    
    if(index === -1) return res.status(404).json({ message: "Task not found" });

    tasks[index] = {...tasks[index], title, completed};

    return res.json(tasks)
})


export default tasksRouter;