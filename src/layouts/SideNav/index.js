import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  IconButton,
  Typography,
  Divider,
  Box
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Home as HomeIcon,
  School as EducationIcon,
  Code as ProjectsIcon,
  Build as SkillsIcon,

  History as HistoryIcon
} from '@mui/icons-material';

const SideNav = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'Education', path: '/education', icon: <EducationIcon /> },
    { text: 'Projects', path: '/projects', icon: <ProjectsIcon /> },
    { text: 'Skills', path: '/skills', icon: <SkillsIcon /> },
      { text: 'Experience', path: '/experience', icon: <HistoryIcon /> }

  ];

  return (
    <>
      {isMobile && (
        <IconButton
          className="mobile-menu-button"
          onClick={handleDrawerToggle}
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: 2000,
            backgroundColor: 'primary.main',
            color: 'white',
            '&:hover': {
              backgroundColor: 'primary.dark',
              transform: 'rotate(90deg)',
            },
            transition: 'all 0.3s ease',
            boxShadow: 3
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? drawerOpen : true}
        onClose={handleDrawerToggle}
        sx={{
          width: 280,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
            backgroundColor: 'background.paper',
            backgroundImage: 'linear-gradient(to bottom, #f5f5f5, #e0e0e0)',
            borderRight: 'none',
            boxShadow: '2px 0 15px rgba(0, 0, 0, 0.1)'
          },
        }}
      >
        <Box 
          sx={{ 
            padding: '24px 20px 16px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #3e2f1c 0%, #6d4c41 100%)',
            color: 'white',
            mb: 2
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700,
              letterSpacing: '1px',
              fontSize: '1.1rem'
            }}
          >
            ADINAKHALID
          </Typography>
          <Typography 
            variant="subtitle2" 
            sx={{ 
              opacity: 0.8,
              fontSize: '0.75rem',
              letterSpacing: '0.5px'
            }}
          >
            ASPIRING WEB DEVELOPER
          </Typography>
        </Box>

        <Divider sx={{ borderColor: 'rgba(0,0,0,0.1)', mb: 1 }} />

        <List sx={{ p: 0 }}>
          {navItems.map((item, index) => (
            <ListItem 
              button 
              key={item.text}
              component={Link} 
              to={item.path} 
              onClick={() => isMobile && setDrawerOpen(false)}
              sx={{
                px: 3,
                py: 1.5,
                mx: 2,
                mb: 0.5,
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                backgroundColor: location.pathname === item.path 
                  ? 'rgba(62, 47, 28, 0.2)' 
                  : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(62, 47, 28, 0.15)',
                  transform: 'translateX(5px)'
                }
              }}
            >
              <ListItemIcon sx={{ 
                minWidth: '40px',
                color: location.pathname === item.path 
                  ? 'primary.main' 
                  : 'inherit'
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{
                  sx: {
                    fontWeight: location.pathname === item.path ? 600 : 400,
                    color: 'text.primary',
                    letterSpacing: '0.3px'
                  }
                }} 
              />
              {location.pathname === item.path && (
                <Box 
                  sx={{
                    width: '4px',
                    height: '24px',
                    backgroundColor: 'primary.main',
                    borderRadius: '2px',
                    ml: 1
                  }} 
                />
              )}
            </ListItem>
          ))}
        </List>

        <Box sx={{ flexGrow: 1 }} />

        <Divider sx={{ borderColor: 'rgba(0,0,0,0.1)', my: 1 }} />
        
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Typography 
            variant="caption" 
            sx={{ 
              display: 'block',
              color: 'text.secondary',
              fontSize: '0.7rem'
            }}
          >
            © {new Date().getFullYear()} AdinaKhalid
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default SideNav;
