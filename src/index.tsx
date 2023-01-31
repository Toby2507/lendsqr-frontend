import React from 'react';
import ReactDOM from 'react-dom/client';
import './SCSS/main.scss';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </AppProvider>
    </Router>
  </React.StrictMode>
);
