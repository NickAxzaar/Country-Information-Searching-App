import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import About from './pages/About';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light'); // State management

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <CountryProvider>
      <div className={`app ${theme}`}>
        <header>
          <nav>
            <Link to="/"> Home</Link>
            <Link to="/favorites"> Favorites</Link>
            <Link to="/about"> About</Link>
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === 'light' ? ' Dark' : ' Light'}
            </button>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </CountryProvider>
  );
}

export default App;
