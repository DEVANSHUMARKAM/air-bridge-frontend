import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button, Paper } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; // adjust path if needed

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isSignInActive = location.pathname === '/signin';
  const isSignUpActive = location.pathname === '/signup';

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: 'white',
        color: '#000', // make text dark on white
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', position: 'relative' }}>
        {/* Logo clickable */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src={logo}
            alt="AirBridge Logo"
            onClick={() => navigate('/')}
            sx={{ height: 80, mr: 1, cursor: 'pointer' }}
          />
        </Box>

        {/* Nav buttons */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {/* Our Services with dropdown */}
          <Box
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            sx={{ position: 'relative' }}
          >
            <Button
              sx={{
                fontWeight: 'bold',
                color: '#000',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Our Services
            </Button>
            {isServicesOpen && (
              <Paper
                elevation={3}
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  mt: 1,
                  bgcolor: 'white',
                  zIndex: 10,
                  minWidth: 220,
                  borderRadius: 1,
                  overflow: 'hidden',
                }}
              >
                {[
                  'Send Files via Email',
                  'Create Download Links',
                  'Folder Transfers',
                  'Track & Manage Transfers',
                  'Custom Branding',
                  'Secure Storage',
                ].map((service, index) => (
                  <Box
                    key={index}
                    sx={{
                      px: 2,
                      py: 1,
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      '&:hover': { bgcolor: '#f0f0f0' },
                    }}
                  >
                    {service}
                  </Box>
                ))}
              </Paper>
            )}
          </Box>

          {/* Other buttons */}
          <Button sx={{ fontWeight: 'bold', color: '#000' }}>Our Offers</Button>
          <Button sx={{ fontWeight: 'bold', color: '#000' }}>Developer</Button>
          <Button sx={{ fontWeight: 'bold', color: '#000' }}>Resources</Button>

          {/* Sign in / Sign up toggle with gradient */}
          <Box
            sx={{
              display: 'flex',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '2px solid #007bff',
              background: 'white',
            }}
          >
            <Button
              onClick={() => navigate('/signin')}
              sx={{
                color: isSignInActive ? 'white' : '#000',
                background: isSignInActive ? 'linear-gradient(to right, #007bff, #00c6ff)' : 'transparent',
                px: 2,
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': {
                  background: isSignInActive ? 'linear-gradient(to right, #007bff, #00c6ff)' : '#f0f0f0',
                },
              }}
            >
              Sign in
            </Button>
            <Button
              onClick={() => navigate('/signup')}
              sx={{
                color: isSignUpActive ? 'white' : '#000',
                background: isSignUpActive ? 'linear-gradient(to right, #007bff, #00c6ff)' : 'transparent',
                px: 2,
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': {
                  background: isSignUpActive ? 'linear-gradient(to right, #007bff, #00c6ff)' : '#f0f0f0',
                },
              }}
            >
              Sign up
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
