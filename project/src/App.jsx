
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React + Vite 最小 Demo</h1>
        <nav>
          <Link to="/">首页</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

