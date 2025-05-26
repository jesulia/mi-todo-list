const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Middleware de autenticación por API key
app.use((req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: 'API key inválida' });
  }
  next();
});

// ENDPOINTS

// Obtener tareas
app.get('/getTasks', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
});

// Obtener metas
app.get('/getGoals', (req, res) => {
  db.query('SELECT * FROM goals', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
});

// Agregar tarea
app.post('/addTask', (req, res) => {
  const { nombre, fecha } = req.body;
  if (!nombre || !fecha) return res.status(400).json({ error: 'Datos incompletos' });

  db.query('INSERT INTO tasks (nombre, fecha) VALUES (?, ?)', [nombre, fecha], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: 'Tarea agregada' });
  });
});

// Agregar meta
app.post('/addGoal', (req, res) => {
  const { nombre, fecha } = req.body;
  if (!nombre || !fecha) return res.status(400).json({ error: 'Datos incompletos' });

  db.query('INSERT INTO goals (nombre, fecha) VALUES (?, ?)', [nombre, fecha], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: 'Meta agregada' });
  });
});

// Eliminar tarea
app.delete('/removeTask', (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'ID no proporcionado' });

  db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: 'Tarea eliminada' });
  });
});

// Eliminar meta
app.delete('/removeGoal', (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'ID no proporcionado' });

  db.query('DELETE FROM goals WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: 'Meta eliminada' });
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
