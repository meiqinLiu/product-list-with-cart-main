
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="app">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

