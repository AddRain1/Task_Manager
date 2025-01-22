const connectDB = require('./db/connect')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
require('dotenv').config()

// middleware
app.use(express.json());

// routes
app.get('/Hello', (req, res) => {
    res.send('Hello World');
});

app.use('/api/v1/tasks', tasks)

// app.get('/api/v1/tasks') get all tasks
// app.post('/api/v1/tasks') create a new task
// app.get('/api/v1/tasks/:id') get a single task
// app.patch('/api/v1/tasks/:id') update a task
// app.delete('/api/v1/tasks/:id') delete a task

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is running on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start()

