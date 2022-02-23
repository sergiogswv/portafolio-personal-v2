import { BrowserRouter, Routes, Route } from "react-router-dom";
import Presentacion from "./components/Presentation";
import School from "./components/School";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Presentacion />} />
          <Route path="/conocimientos" element={<School />} />
          <Route path="/experiencia" element={<Experience />} />
          <Route path="/aptitudes" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
