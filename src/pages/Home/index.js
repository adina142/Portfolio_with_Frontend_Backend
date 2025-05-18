import React, { useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import { Box, Typography, Avatar, useMediaQuery, useTheme } from '@mui/material';

const Home = () => {
  const { setPageTitle } = usePageTitle();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  useEffect(() => {
    setPageTitle('Home - My Portfolio');
  }, [setPageTitle]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? 3 : 6,
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        gap: isMobile ? 4 : 8,
        minHeight: 'calc(100vh - 120px)',
      }}
    >
       <Box
  sx={{
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: isMobile ? '300px' : isTablet ? '350px' : '500px',
    '&:hover': {
      '& .profile-picture': {
        transform: 'scale(1.03)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
        filter: 'brightness(1.05)',
      }
    }
  }}
>
  <Avatar
    alt="Adina Khalid, Computer Science student and full-stack developer"
    src="/assests/profile.png"
    className="profile-picture"
    sx={{
      width: '100%',
      height: 'auto',
      aspectRatio: '1/1',
      borderRadius: '50%',
      objectFit: 'cover',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
      border: '6px solid',
      borderColor: theme.palette.mode === 'dark' ? 'black' : 'black',
      transition: 'all 0.3s ease-in-out',
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
        filter: 'brightness(1.05)',
      }
    }}
  />
</Box>

      {/* Text Content - Improved typography and containment */}
      <Box
        sx={{
          width: '100%',
          maxWidth: isMobile ? '100%' : '600px',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography 
          variant={isMobile ? 'h4' : 'h3'} 
          fontWeight={700}
          color="black"
          sx={{
            lineHeight: 1.2,
            letterSpacing: '-0.5px',
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          Welcome to My Portfolio
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography 
            variant={isMobile ? 'body1' : 'h6'} 
            sx={{
              lineHeight: 1.6,
              fontFamily: '"Roboto", sans-serif',
              fontWeight: 400,
              color: 'text.secondary',
            }}
          >
            I'm a passionate Computer Science student in my 4th semester, dedicated to technology and innovation. 
            With a strong academic foundation, I continuously enhance my programming skills through challenging projects.
          </Typography>
          
          <Typography 
            variant={isMobile ? 'body1' : 'h6'} 
            sx={{
              lineHeight: 1.6,
              fontFamily: '"Roboto", sans-serif',
              fontWeight: 400,
              color: 'text.secondary',
            }}
          >
            I'm excited to contribute to the tech industry by creating meaningful solutions and pushing the boundaries 
            of what's possible through code.
          </Typography>
          
          <Typography 
            variant={isMobile ? 'body1' : 'h6'} 
            sx={{
              lineHeight: 1.6,
              fontFamily: '"Roboto", sans-serif',
              fontWeight: 500,
              color: 'black',
              mt: 1,
            }}
          >
            Explore my work and achievements below!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;