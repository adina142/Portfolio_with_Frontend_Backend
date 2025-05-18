import React from 'react';
import { Box, Typography } from '@mui/material';


const Footer = () => {
  return (
    <Box 
      component="footer" 
      className="footer-container"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        py: 2,
        bgcolor: 'primary.main',
        color: 'white',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} AdinaKhalid - All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;