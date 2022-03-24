import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Presentacion from "./components/Presentation";
import School from "./components/School";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
//import Plus from "./components/Plus";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Presentacion />} />
          <Route path="/conocimientos" element={<School />} />
          <Route path="/experiencia" element={<Experience />} />
          <Route path="/aptitudes" element={<Skills />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
