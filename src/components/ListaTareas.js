import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { eliminarTarea } from '../redux/tareasSlice';

function ListaTareas() {
  const tareas = useSelector((state) => state.tareas);
  const dispatch = useDispatch();

  return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id}>
          {tarea.texto} - {tarea.fecha}
          <button onClick={() => dispatch(eliminarTarea(tarea.id))}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;
