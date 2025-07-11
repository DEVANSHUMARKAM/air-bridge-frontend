import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import SignUpModal from './components/SignUpModal';
import SignInModal from './components/SignInModal';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpModal />} />
        <Route path="/signin" element={<SignInModal />} />
      </Routes>
    </Router>
  );
};

export default App;
