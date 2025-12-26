import { useState, useEffect } from 'react';
import './App.css'

const App = () => {

  const [Tarea, setTarea] = useState([])
  const [text, setText] = useState("");

  const addTarea = () => {
    if (!text.trim()) {
      return;
    }

    setTarea([...Tarea, { texto: text, completada: false }])
    setText("")
  }

  const toggleTarea = (index) => {
    const nuevaTarea = Tarea.map((t, i) =>
      i === index ? { ...t, completada: !t.completada } : t
    );

    setTarea(nuevaTarea)
  }

  const deleteTask = (index) => {
    const nuevaTarea = Tarea.filter((_, i) => i !== index);
    setTarea(nuevaTarea)
  }

  return (
    <>

      <section className="ListaTask">
        <h2>Lista de Tareas</h2>

        <div>Tareas...</div>
        <input placeholder="Nueva Tarea" value={text} onChange={(v) => setText(v.target.value)} />
        <button onClick={addTarea} className='agregar-button'>Agregar Tarea</button>
        <ul>
          {Tarea.map((t, i) => (
            <li key={i}>
              <input
                type="checkbox"
                checked={t.completada}
                onChange={() => toggleTarea(i)}
              />
              <span>{t.texto}</span>
              <button className='delete-button' onClick={() => deleteTask(i)}> Eliminar tarea </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default App
