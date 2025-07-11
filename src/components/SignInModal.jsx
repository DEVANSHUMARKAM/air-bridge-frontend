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

const SignInModal = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => {
    navigate('/'); // back to landing page
  };

  const handleSignIn = () => {
    // Call your backend API here
    console.log('Signing in:', { email, password });
  };

  return (
    <Modal
      open
      onClose={handleClose}
      sx={{
        backdropFilter: 'blur(5px)',
        backgroundColor: 'rgba(0,0,0,0.4)',
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
          Sign In
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
          onClick={handleSignIn}
        >
          Sign In
        </Button>

        <Button
          variant="text"
          fullWidth
          onClick={() => navigate('/signup')}
        >
          Don’t have an account? Sign up
        </Button>
      </Paper>
    </Modal>
  );
};

export default SignInModal;
