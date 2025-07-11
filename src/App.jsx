import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme.js';
import Navbar from './components/Navbar.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  </ThemeProvider>
);

export default App;
