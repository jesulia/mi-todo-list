const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const API_KEY = process.env.API_KEY;

app.use(cors());
app.use(express.json());

// Middleware de autenticación por API key
app.use((req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({ error: 'Acceso no autorizado: API key inválida o ausente' });
  }
  next();
});

// ==================== ENDPOINTS ==================== //

// GET - Obtener todas las tareas
app.get('/getTasks', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener tareas' });
    res.status(200).json(results);
  });
});

// GET - Obtener todas las metas
app.get('/getGoals', (req, res) => {
  db.query('SELECT * FROM goals', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener metas' });
    res.status(200).json(results);
  });
});

// POST - Agregar nueva tarea
app.post('/addTask', (req, res) => {
  const { nombre, fecha } = req.body;
  if (!nombre || !fecha) {
    return res.status(400).json({ error: 'Datos incompletos: se requiere nombre y fecha' });
  }

  db.query('INSERT INTO tasks (nombre, fecha) VALUES (?, ?)', [nombre, fecha], (err) => {
    if (err) return res.status(500).json({ error: 'Error al agregar la tarea' });
    res.status(200).json({ message: 'Tarea agregada correctamente' });
  });
});

// POST - Agregar nueva meta
app.post('/addGoal', (req, res) => {
  const { nombre, fecha } = req.body;
  if (!nombre || !fecha) {
    return res.status(400).json({ error: 'Datos incompletos: se requiere nombre y fecha' });
  }

  db.query('INSERT INTO goals (nombre, fecha) VALUES (?, ?)', [nombre, fecha], (err) => {
    if (err) return res.status(500).json({ error: 'Error al agregar la meta' });
    res.status(200).json({ message: 'Meta agregada correctamente' });
  });
});

// DELETE - Eliminar una tarea
app.delete('/removeTask', (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'ID de tarea no proporcionado' });

  db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al eliminar la tarea' });
    res.status(200).json({ message: 'Tarea eliminada correctamente' });
  });
});

// DELETE - Eliminar una meta
app.delete('/removeGoal', (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'ID de meta no proporcionado' });

  db.query('DELETE FROM goals WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al eliminar la meta' });
    res.status(200).json({ message: 'Meta eliminada correctamente' });
  });
});

// ==================== INICIAR SERVIDOR ==================== //

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});

