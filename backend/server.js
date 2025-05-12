const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

let tasks = [];
let goals = [];

app.get('/getTasks', (req, res) => {
  res.json(tasks);
});

app.get('/getGoals', (req, res) => {
  res.json(goals);
});

app.post('/addTask', (req, res) => {
  const { name, date } = req.body;
  tasks.push({ name, date });
  res.status(201).json({ message: 'Tarea agregada' });
});

app.post('/addGoal', (req, res) => {
  const { name, date } = req.body;
  goals.push({ name, date });
  res.status(201).json({ message: 'Meta agregada' });
});

app.delete('/removeTask', (req, res) => {
  const { name } = req.body;
  tasks = tasks.filter(task => task.name !== name);
  res.json({ message: 'Tarea eliminada' });
});

app.delete('/removeGoal', (req, res) => {
  const { name } = req.body;
  goals = goals.filter(goal => goal.name !== name);
  res.json({ message: 'Meta eliminada' });
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
