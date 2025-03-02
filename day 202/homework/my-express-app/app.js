const express = require('express');
const app = express();

app.use(express.json());

const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

const authMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== 'secret-key') {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
};

const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
};

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Welcome to the public route!');
});

app.get('/products', (req, res) => {
    res.json([{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]);
});

app.get('/protected', authMiddleware, (req, res) => {
    res.send('This is a protected route!');
});

app.use(errorHandlerMiddleware);

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});












// const express = require('express');
// const app = express();

// app.use(['/users', '/products'], (req, res, next) => {
//   console.log('Middleware for /users or /products triggered!');
//   next();
// });

// app.get('/users', (req, res) => {
//   res.send('List of users!');
// });

// app.post('/users', (req, res) => {
//   res.send('Creating a new user!');
// });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });




















// const express = require('express');
// const app = express();

// const helloMid = (req, res, next) => {
//   console.log("Hello");
//   next(); 
// };

// app.use(helloMid);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Servern listening on port ${port}`);
// });

















// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.use(express.json());

// let tasks = [];
// let currentId = 1;

// app.get('/tasks', (req, res) => {
//     res.json(tasks);
// });

// app.get('/tasks/:id', (req, res) => {
//     const taskId = parseInt(req.params.id);
//     const task = tasks.find(t => t.id === taskId);
//     if (!task) {
//         return res.status(404).json({ message: 'Task not found' });
//     }
//     res.json(task);
// });

// app.post('/tasks', (req, res) => {
//     const { title, description, completed } = req.body;
//     if (!title || !description) {
//         return res.status(400).json({ message: 'Title and description are required' });
//     }
//     const newTask = {
//         id: currentId++,
//         title,
//         description,
//         completed: completed || false
//     };
//     tasks.push(newTask);
//     res.status(201).json(newTask);
// });

// app.put('/tasks/:id', (req, res) => {
//     const taskId = parseInt(req.params.id);
//     const task = tasks.find(t => t.id === taskId);
//     if (!task) {
//         return res.status(404).json({ message: 'Task not found' });
//     }
//     const { title, description, completed } = req.body;
//     if (title) task.title = title;
//     if (description) task.description = description;
//     if (completed !== undefined) task.completed = completed;
//     res.json(task);
// });

// app.delete('/tasks/:id', (req, res) => {
//     const taskId = parseInt(req.params.id);
//     const taskIndex = tasks.findIndex(t => t.id === taskId);
//     if (taskIndex === -1) {
//         return res.status(404).json({ message: 'Task not found' });
//     }
//     tasks.splice(taskIndex, 1);
//     res.status(204).send();
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });