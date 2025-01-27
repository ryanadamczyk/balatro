import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JokerPage from './pages/JokerPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joker/:name" element={<JokerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
