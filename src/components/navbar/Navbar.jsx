import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" >
      <Toolbar sx={{backgroundColor:"white"}}>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          {/* Left Section: Logo and Company Name */}
          <Stack direction={'row'} gap={1} alignItems="center" >
            {/* Placeholder for logo icon */}
            <img src='/public/images/logo.png' alt='Logo' style={{height:50, width:50}}/>
            <Typography  color='var(--dark-color)' fontSize={20} fontWeight={'bold'}>
              MY EXAM PARTNER
            </Typography>
          </Stack>
          
          {/* Center Section: Navigation Links */}
          <Box
            display="flex"
            flexGrow={1}
            justifyContent="center"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems="center"
            sx={{ gap: 6 }}
          >
            <Link to={'/'} style={{color:"var(--dark-color)",fontWeight:'SemiBold',fontSize:18}}>Home</Link>
            <Link to={'/'} style={{color:"var(--dark-color)",fontWeight:'SemiBold',fontSize:18}}>About Us</Link>
            <Link to={'/'} style={{color:"var(--dark-color)",fontWeight:'SemiBold',fontSize:18}}>Pricing</Link>
            <Button endIcon={<KeyboardArrowDownIcon/>} style={{color:"var(--dark-color)",fontWeight:'SemiBold',fontSize:18}} onClick={handleMenuOpen}>
              Curriculum
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
              <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
              <MenuItem onClick={handleMenuClose}>Option 4</MenuItem>
            </Menu>
          </Box>
          
          {/* Right Section: Contact Us Button */}
          <Box sx={{ mt: { xs: 2, sm: 0 } }}>
            <Button
              sx={{ px: 3, py: 1, width: { xs: '100%', sm: 'auto' },color:"var(--dark-color)",backgroundColor:"transparent",border:"2px solid black",borderRadius:"50px",fontWeight:550}}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
