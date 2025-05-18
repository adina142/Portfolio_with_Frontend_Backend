import React, { useState } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Menu, 
  MenuItem, 
  Avatar, 
  Box,
  Divider
} from '@mui/material';
import { Logout, Settings, AccountCircle } from '@mui/icons-material';


const Header = () => {
  const { title } = usePageTitle();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Placeholder for logout logic
    console.log("Logout clicked");
    handleMenuClose();
  };

  return (
    <AppBar position="sticky" className="header-bar">
      <Toolbar className="header-toolbar">
        <Typography variant="h6" component="div" className="header-title">
          {title}
        </Typography>

        <Box>
          <IconButton onClick={handleMenuOpen} color="inherit" size="large">
            <Avatar 
              alt="Profile" 
              src="/assests/profile.png" 
              className="profile-avatar"
            />
          </IconButton>
          
          <Menu
            className="profile-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleMenuClose} className="profile-item">
              <AccountCircle sx={{ marginRight: 1.5, color: 'inherit' }} />
              Profile
            </MenuItem>
            <MenuItem onClick={handleMenuClose} className="profile-item">
              <Settings sx={{ marginRight: 1.5, color: 'inherit' }} />
              Settings
            </MenuItem>
            <Divider />
            <MenuItem 
              onClick={handleLogout} 
              className="logout-item"
            >
              <Logout sx={{ marginRight: 1.5, color: 'inherit' }} />
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;