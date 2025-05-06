import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { agregarTarea } from '../redux/tareasSlice';
import { v4 as uuidv4 } from 'uuid';

function AgregarTarea() {
  const [texto, setTexto] = useState('');
  const [fecha, setFecha] = useState('');
  const dispatch = useDispatch();

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!texto) return;
    dispatch(agregarTarea({ id: uuidv4(), texto, fecha }));
    setTexto('');
    setFecha('');
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="Descripción de la tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AgregarTarea;
