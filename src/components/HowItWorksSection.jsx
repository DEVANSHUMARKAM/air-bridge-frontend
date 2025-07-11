import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';

const steps = [
  {
    number: 1,
    title: 'Select your files to send',
    description: 'Click on Start to select the files and documents to send or drag and drop them directly anywhere on our interface.',
  },
  {
    number: 2,
    title: 'Fill-in our form',
    description: 'Send files via email to your contacts or get a customizable shareable link. AirBridge provides the adapted features to fit your needs.',
  },
  {
    number: 3,
    title: 'Validate to transfer and start upload!',
    description: 'When finished filling in the transfer form, click Transfer to confirm your transfer information and start uploading your documents 🚀',
  },
];

const HowItWorksSection = () => {
  const handleSendFilesNow = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ py: 18, px: 20, backgroundColor: 'background.default', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 6 }}>
        How to send and share large files with AirBridge?
      </Typography>

      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        gap: 4,
        mb: 4,
      }}>
        {steps.map((step) => (
          <Card key={step.number} sx={{ flex: 1, borderRadius: 3 }}>
            <CardContent>
              <Box
                sx={{
                  width: 32, height: 32,
                  bgcolor: 'primary.main',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  mb: 4,
                }}
              >
                {step.number}
              </Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 3 }}>
                {step.title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {step.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
        <Button variant="contained" color="primary" onClick={handleSendFilesNow}>
          Send files now
        </Button>
        <Button variant="outlined" color="primary">
          Compare our offers
        </Button>
      </Box>
    </Box>
  );
};

export default HowItWorksSection;
