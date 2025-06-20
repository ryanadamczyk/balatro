import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JokerPage from './pages/JokerPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joker/:name" element={<JokerPage />} />
      </Routes>
    </div>
  );
}

export default App;
