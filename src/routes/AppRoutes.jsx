import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage.jsx';
import SendPage from '../pages/SendPage.jsx';
import ReceivePage from '../pages/ReceivePage.jsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/send" element={<SendPage />} />
    <Route path="/receive" element={<ReceivePage />} />
  </Routes>
);

export default AppRoutes;
