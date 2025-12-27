import { useState, useEffect, useRef, useMemo } from 'react';
import './App.css';

const App = () => {

  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem("tareas");
    return guardadas ? JSON.parse(guardadas) : [];
  });
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const addTarea = () => {
    if (!text.trim()) return;

    setTareas([...tareas, { texto: text, completada: false }]);

    setText(""); inputRef.current.focus();
  };

  const toggleTarea = (index) => {
    const nuevas = tareas.map((t, i) =>
      i === index ? { ...t, completada: !t.completada } : t
    );
    setTareas(nuevas);
  };

  const deleteTask = (index) => {
    const nuevas = tareas.filter((_, i) => i !== index);
    setTareas(nuevas);
  };

  const tareasFiltradas = useMemo(() => {
    return tareas.filter(t =>
      t.texto.toLowerCase().includes(search.toLowerCase())
    );
  }, [tareas, search]);

  return (
    <>
      <section className="ListaTask">
        <h2>Lista de Tareas</h2>

        <input
          type="search"
          placeholder="Buscar tarea"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          ref={inputRef}
          placeholder="Nueva tarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={addTarea} className="agregar-button">
          Agregar Tarea
        </button>

        <ul>
          {tareasFiltradas.map((t, i) => (
            <li key={i}>
              <input
                type="checkbox"
                checked={t.completada}
                onChange={() => toggleTarea(i)}
              />
              <span>{t.texto}</span>
              <button className="delete-button" onClick={() => deleteTask(i)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default App;
