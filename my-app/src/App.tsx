import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/poppy-flower" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
