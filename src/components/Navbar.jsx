import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button, Typography, Paper } from '@mui/material';
import logo from '../assets/logo.jpeg'; // adjust path

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: 'linear-gradient(to right, #007bff, #00c6ff)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', position: 'relative' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src={logo}
            alt="AirBridge Logo"
            sx={{ height: 80, mr: 1 }}
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
              color="inherit"
              sx={{
                fontWeight: 'bold',
                '&:hover': { textDecoration: 'underline' }
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
                  overflow: 'hidden'
                }}
              >
                {[
                  'Send Files via Email',
                  'Create Download Links',
                  'Folder Transfers',
                  'Track & Manage Transfers',
                  'Custom Branding',
                  'Secure Storage'
                ].map((service, index) => (
                  <Box
                    key={index}
                    sx={{
                      px: 2,
                      py: 1,
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      '&:hover': { bgcolor: '#f0f0f0' }
                    }}
                  >
                    {service}
                  </Box>
                ))}
              </Paper>
            )}
          </Box>

          {/* Other buttons */}
          <Button color="inherit" sx={{ fontWeight: 'bold' }}>Our Offers</Button>
          <Button color="inherit" sx={{ fontWeight: 'bold' }}>Developer</Button>
          <Button color="inherit" sx={{ fontWeight: 'bold' }}>Resources</Button>
          <Button
            color="inherit"
            variant="outlined"
            sx={{ borderRadius: 4, fontWeight: 'bold' }}
          >
            Sign In / Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
