// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',  // AirBridge blue (change to your brand color)
    },
    secondary: {
      main: '#00bfa5',  // Teal accent (change as you like)
    },
    background: {
      default: '#f5f5f5', // Default background
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h3: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8, // Rounded corners for buttons/cards
  },
});

export default theme
