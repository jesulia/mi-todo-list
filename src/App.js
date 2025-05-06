import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from "react-bootstrap";
import './style.css';
import AgregarTarea from './components/AgregarTarea';
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <h1 className="text-center mb-4">Mis Tareas y Metas</h1>

        {/* Formulario para agregar tarea */}
        <AgregarTarea />

        <hr />

        <h4 className="mt-4">Lista de Tareas:</h4>
        <ListaTareas />
      </Card>
    </Container>
  );
}

export default App;

