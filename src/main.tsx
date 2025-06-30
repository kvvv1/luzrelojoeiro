import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import PortfolioAdmin from './components/PortfolioAdmin';
import App from './App';
import './index.css';

const MainComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/portifolio" element={<Portfolio />} />
      <Route path="/portifolio/admin" element={<PortfolioAdmin />} />
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainComponent />
  </StrictMode>
);
