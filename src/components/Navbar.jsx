import { AppBar, Toolbar, Box, Button } from '@mui/material';
import logo from '../assets/logo.jpeg'; // adjust path if needed

const Navbar = () => {
  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{
        background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src={logo}
            alt="AirBridge Logo"
            sx={{ height: 80, mr: 1 }}
          />
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" sx={{ fontWeight: 500 }}>Our Services</Button>
          <Button color="inherit" sx={{ fontWeight: 500 }}>Our Offers</Button>
          <Button color="inherit" sx={{ fontWeight: 500 }}>Developer</Button>
          <Button color="inherit" sx={{ fontWeight: 500 }}>Resources</Button>
          <Button 
            color="inherit" 
            variant="outlined" 
            sx={{ 
              borderRadius: 4, 
              fontWeight: 500,
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            Sign In / Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
