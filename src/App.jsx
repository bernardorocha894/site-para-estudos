import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Explorar from './pages/Explorar/Explorar';
import Login from './pages/Login/Login';
import EducaMais from './pages/EducaMais/EducaMais';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<EducaMais />} />
      </Routes>
    </Router>
  );
}

export default App;