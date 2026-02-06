import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const JokerPage = lazy(() => import('./pages/JokerPage'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div className="route-loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joker/:name" element={<JokerPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
