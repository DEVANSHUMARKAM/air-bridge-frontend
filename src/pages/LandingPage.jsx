import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import FileDropZone from '../components/FileDropZone';
import FileTransferModal from '../components/FileTransferModal';
import HowItWorksSection from '../components/HowItWorksSection';
import AirBridgeFeaturesSection from '../components/AirBridgeFeaturesSection';
import FAQSection from '../components/FAQSection';
import AirBridgeInfoSection from '../components/AirBridgeInfoSection';

const LandingPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const handleFilesAdded = (files) => {
    setSelectedFiles((prev) => [...prev, ...files]);
    if (files.length > 0) {
      setOpenModal(true);
    }
  };

  const handleDeleteFile = (fileIndex) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(fileIndex, 1);
    setSelectedFiles(newFiles);
    if (newFiles.length === 0) {
      setOpenModal(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      {/* Hero section with gradient */}
      <Box
        sx={{
          background: 'linear-gradient(to right, #007bff, #00c6ff)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 10,
          px: 2,
        }}
      >
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
          Transfer and let your files fly freely
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4, textAlign: 'center' }}>
          AirBridge makes it simple, fast, and secure to share any file — anywhere, anytime.
        </Typography>

        <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
          <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 3 }}>
            Send
          </Button>
          <Button variant="outlined" color="inherit" size="large" sx={{ borderRadius: 3 }}>
            Receive
          </Button>
        </Box>

        <FileDropZone onFilesAdded={handleFilesAdded} />
      </Box>

      {/* Modal */}
      <FileTransferModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        selectedFiles={selectedFiles}
        onDeleteFile={handleDeleteFile}
        onFilesAdded={handleFilesAdded}
      />

      {/* Sections */}
      <HowItWorksSection />
      <AirBridgeFeaturesSection />
      <FAQSection />
      <AirBridgeInfoSection />

      {/* Scroll to top button */}
      {showScroll && (
        <Box
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            bgcolor: 'primary.main',
            color: 'white',
            borderRadius: '50%',
            width: 50,
            height: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            boxShadow: 3,
            zIndex: 9999,
            transition: 'opacity 0.3s ease',
          }}
        >
          <KeyboardArrowUpIcon fontSize="large" />
        </Box>
      )}
    </Box>
  );
};

export default LandingPage;
