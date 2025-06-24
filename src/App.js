import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import LandingPage from './LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Landing Page at /landing */}
      <Route path="/landing" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
