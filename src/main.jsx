import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import AppContextProvider from './context/AppContext'; // ✅ import your context provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider> {/* ✅ wrap App inside provider */}
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
);
