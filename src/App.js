import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Api from './Components/Api';
import CharacterDetail from './Components/CharacterDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Api />} />
        <Route path="/characters/:characterId" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
