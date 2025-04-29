import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import './style.css'; // Estilos externos

function App() {
  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <h1 className="text-center mb-4">Mis Tareas y Metas</h1>

        <Form>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="mb-3">
              <Form.Control type="text" placeholder="Nombre de la tarea" />
            </Col>

            <Col xs={12} md={4} className="mb-3">
              <Form.Control type="date" />
            </Col>

            <Col xs={12} md={2} className="mb-3">
              <Button variant="primary" type="submit" className="w-100">
                Agregar
              </Button>
            </Col>
          </Row>
        </Form>

        <hr />

        <h4 className="mt-4">Lista de Tareas:</h4>
        {/* Aquí después irá la lista de tareas */}
      </Card>
    </Container>
  );
}

export default App;
