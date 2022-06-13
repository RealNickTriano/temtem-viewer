import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DailyTemtem from './DailyTemtem';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/dailytemtem' element={<DailyTemtem />} />
      </Routes>
    </Router>
    
  </React.StrictMode>
);

