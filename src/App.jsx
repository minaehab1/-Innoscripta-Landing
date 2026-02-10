import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lander from './pages/Lander';
import LanderRolling from './pages/LanderRolling';

function App() {
  const location = useLocation();
  // Don't show standard Header/Footer on Lander page (now the root path)
  const isLander = location.pathname === '/' || location.pathname === '/rolling';

  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-dark-blue bg-white">
      {!isLander && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Lander />} />
          <Route path="/rolling" element={<LanderRolling />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
      {!isLander && <Footer />}
    </div>
  );
}

export default App;
