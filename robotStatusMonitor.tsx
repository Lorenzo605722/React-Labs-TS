import { useState } from "react";

interface Robot {
  id: number;
  nome: string;
  stato: "Attivo" | "Standby" | "Errore";
}

export default function RobotStatusMonitor() {
  const [robotList, setRobotList] = useState<Robot[]>([
    { id: 1, nome: "WeldingArm_01", stato: "Attivo" },
    { id: 2, nome: "AssemblyArm_02", stato: "Standby" },
  ]);

  const toggleStatus = (id: number) => {
    setRobotList(robotList.map(r => 
      r.id === id ? { ...r, stato: r.stato === "Attivo" ? "Standby" : "Attivo" } : r
    ));
  };

  return (
    <div>
      <h2>Monitoraggio Robotica</h2>
      {robotList.map(r => (
        <div key={r.id} style={{ marginBottom: "10px" }}>
          <strong>{r.nome}</strong>: {r.stato}
          <button onClick={() => toggleStatus(r.id)}>Toggle</button>
        </div>
      ))}
    </div>
  );
}
