import { useState } from "react";

interface Task {
  id: number;
  nome: string;
  completato: boolean;
}

// Nota: questo componente è pronto per essere inserito in una dashboard
export default function ProductionTaskBoard() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, nome: "Robot Welding: Telaio Punto", completato: false },
    { id: 2, nome: "Controllo Qualità Verniciatura", completato: true },
  ]);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completato: !t.completato } : t))
    );
  };

  const taskCompletati = tasks.filter((t) => t.completato).length;

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", maxWidth: "400px" }}>
      <h2>Board Produzione</h2>
      <p>Stato: {taskCompletati} / {tasks.length} task completati</p>
      
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ margin: "10px 0", display: "flex", justifyContent: "space-between" }}>
            <span style={{ textDecoration: task.completato ? "line-through" : "none" }}>
              {task.nome}
            </span>
            <button onClick={() => toggleTask(task.id)}>
              {task.completato ? "Annulla" : "Completa"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
