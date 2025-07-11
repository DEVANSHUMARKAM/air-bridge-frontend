import React, { useState } from 'react';
import {
  Modal,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const SignUpModal = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleClose = () => {
    navigate('/'); // Navigate back to landing page
  };

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Call your backend API here
    console.log('Signing up:', { email, password, confirmPassword });
  };

  return (
    <Modal
      open
      onClose={handleClose}
      sx={{
        backdropFilter: 'blur(5px)',
        backgroundColor: 'rgba(0,0,0,0.4)', // dark overlay to disable background interaction
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          position: 'relative',
          p: 4,
          width: 350,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {/* Close button */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: '#888',
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={1}>
          Sign Up
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          size="small"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          size="small"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            background: 'linear-gradient(to right, #007bff, #00c6ff)',
            color: '#fff',
            fontWeight: 'bold',
            mt: 1,
            '&:hover': {
              background: 'linear-gradient(to right, #005bb5, #009fcc)',
            },
          }}
          onClick={handleSignUp}
        >
          Sign Up
        </Button>

        <Button
          variant="text"
          fullWidth
          onClick={() => navigate('/signin')}
        >
          Already have an account? Sign in
        </Button>
      </Paper>
    </Modal>
  );
};

export default SignUpModal;
