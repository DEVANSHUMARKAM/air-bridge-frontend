import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X'; // or Twitter
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from '../assets/logo.jpeg'; // replace with your logo path

const AirBridgeInfoSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        boxShadow: 3,
        borderRadius: 4,
        p: { xs: 2, md: 4 },
        maxWidth: '1000px',
        mx: 'auto',
        my: 6,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      {/* Top: Logo and Social icons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box
          component="img"
          src={logo}
          alt="AirBridge Logo"
          sx={{ height: 50 }}
        />
        <Box>
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit">
            <XIcon />
          </IconButton>
          <IconButton color="inherit">
            <YouTubeIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Middle: Text */}
      <Typography sx={{ fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
        <strong>AirBridge</strong> is a secure solution for <strong>sending large files</strong> – share and send or receive huge files (<strong>photos, videos, documents, and more</strong>) quickly and easily.
        Whether for <strong>personal or business use</strong>, our intuitive <strong>file sharing and receiving tool</strong> is built to handle even your heaviest transfers. 
        Send files via email or create simple shareable links accessible anywhere. <br />
        AirBridge makes your transfers <strong>fast, secure, and seamless</strong>.
      </Typography>

      {/* Bottom: Footer row */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: 2,
        fontSize: '0.85rem',
        color: 'text.secondary'
      }}>
        <Typography>Made by Devanshu Markam & Hitesh Ilamkar</Typography>
        <Typography>2025 © AirBridge — All rights reserved</Typography>
      </Box>
    </Box>
  );
};

export default AirBridgeInfoSection;
