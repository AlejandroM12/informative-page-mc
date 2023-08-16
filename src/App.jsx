import { Router, Routes, Route } from "react-router-dom";
import { Navegacion } from "@/components/Navegacion";
import { Inicio, Prensa } from "@/views/Inicio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navegacion />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/prensa" element={<Prensa />} />
            <Route path="/contacto" />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
