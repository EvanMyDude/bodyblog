import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<div className="text-white p-8">BodyBlog — coming soon</div>} />
      </Routes>
    </HashRouter>
  )
}

export default App
