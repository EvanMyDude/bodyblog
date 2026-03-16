import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "@/pages/Home";
import { BlogPostPage } from "@/pages/BlogPost";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
