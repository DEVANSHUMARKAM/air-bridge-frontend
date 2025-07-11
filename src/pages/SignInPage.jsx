import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
      <Paper sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
          Sign In
        </Typography>
        <TextField
          fullWidth
          label="Registered Email"
          variant="outlined"
          sx={{ mb: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          sx={{ mb: 3 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth>
          Sign In
        </Button>
      </Paper>
    </Box>
  );
};

export default SignInPage;
