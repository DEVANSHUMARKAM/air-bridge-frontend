import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/auth/signup', {
        email,
        password
      });
      setMessage(response.data);
    } catch (error) {
      console.error(error);
      setMessage("Sign up failed");
    }
  };

  return (
    <Box sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      minHeight: '100vh', background: 'linear-gradient(to right, #007bff, #00c6ff)'
    }}>
      <Paper sx={{ p: 4, width: 300 }}>
        <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>Sign Up</Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth sx={{ mb: 2 }}
          value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth sx={{ mb: 2 }}
          value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth sx={{ mb: 2 }}
          value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleSignUp}
          sx={{ background: 'linear-gradient(to right, #007bff, #00c6ff)', color: 'white' }}
        >
          Sign Up
        </Button>
        {message && <Typography sx={{ mt: 2, textAlign: 'center' }}>{message}</Typography>}
      </Paper>
    </Box>
  );
};

export default SignupPage;
