import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navegacion } from "@/components/Navegacion";
import { Inicio, Prensa } from "@/views";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navegacion />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/prensa" element={<Prensa />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
