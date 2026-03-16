import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "@/pages/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
