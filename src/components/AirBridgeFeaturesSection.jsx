import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

const features = [
  {
    title: 'Secure file transfer via email or links',
    description: 'Send files quickly and securely with AirBridge.<br />Share large files via email or create simple sharing links accessible from any device.',
    icon: '📤'
  },
  {
    title: 'Send huge files up to 250 GB',
    description: 'Easily transfer very large files and folders.<br />Files stay available for up to 365 days before they’re securely deleted.',
    icon: '📦'
  },
  {
    title: 'Track your transfers easily',
    description: 'Use the dashboard to track downloads,<br />edit transfer details, and re-transfer files to new recipients without re-uploading.',
    icon: '📊'
  },
  {
    title: 'Send files as a business',
    description: 'Invite team members, manage permissions,<br />customize branding, and view the history of all sent and received files.',
    icon: '👥'
  },
  {
    title: 'Integrate AirBridge on your website',
    description: 'Embed our file upload widget on your website,<br />so visitors can send you files directly. Customize its look and feel easily.',
    icon: '🌐'
  },
  {
    title: 'Custom branding & white label',
    description: 'Add your logo, choose your color scheme,<br />and get a custom subdomain to look fully professional.',
    icon: '🎨'
  },
];

const AirBridgeFeaturesSection = () => {
  return (
    <Box 
      sx={{ 
        py: 8, 
        px: 2, 
        background: 'linear-gradient(90deg, #3B82F6, #06B6D4)' 
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          mb: 4,
          textAlign: 'center',
          fontFamily: 'Rubik, sans-serif',
          fontSize: { xs: '1.8rem', md: '2.4rem' },
          color: 'white'
        }}
      >
        With an AirBridge account you can send and share even bigger files!
      </Typography>

      <Typography
        sx={{
          maxWidth: '700px',
          mx: 'auto',
          textAlign: 'center',
          mb: 6,
          fontSize: { xs: '1rem', md: '1.2rem' },
          fontFamily: 'Rubik, sans-serif',
          color: 'white'
        }}
      >
        AirBridge is your secure and fast solution to send large files, photos, videos, and documents.<br />
        Upgrade to unlock even more capacity and branding options.
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
      >
        {features.map((feature, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'space-between',
                p: 3,
                bgcolor: 'rgba(255,255,255,0.9)', // semi-transparent white background for readability
                borderRadius: index % 2 === 0 ? '24px 4px' : '4px 24px',
                boxShadow: 23,
                width: '100%',
                maxWidth: 320,
                minHeight: 260,
                mx: 'auto'
              }}
            >
              <Typography sx={{ fontSize: '2rem' }}>{feature.icon}</Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', fontFamily: 'Rubik, sans-serif', mb: 1 }}
              >
                {feature.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.95rem',
                  fontFamily: 'Rubik, sans-serif',
                  flexGrow: 1
                }}
                dangerouslySetInnerHTML={{ __html: feature.description }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 3 }}>
          Free trial
        </Button>
        <Button variant="outlined" color="primary" size="large" sx={{ borderRadius: 3, color: 'white', borderColor: 'white' }}>
          Compare our offers
        </Button>
      </Box>
    </Box>
  );
};

export default AirBridgeFeaturesSection;
