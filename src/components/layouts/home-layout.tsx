import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom'; // For nested routes
import { Box, Button, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const HomeLayout: React.FC = () => {
  const navigate = useNavigate();

  // Handle sidebar item clicks
  const handleSidebarClick = (path: string) => {
    navigate(path); 
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/auth');
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#2E2E2E' }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: 250,
          backgroundColor: '#212121',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          padding: 2,
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2 }}>PODCASTS SAY WHAT</Typography>
        <List sx={{ padding: 0 }}>
          {['Item-1', 'Item-2', 'Item-3', 'Item-4', 'Item-5', 'Tutorial', 'Document', 'Model', 'Reference'].map((item) => (
            <ListItem
              key={item}
              onClick={() => handleSidebarClick(`/item/${item.toLowerCase()}`)} // Example routing
              sx={{
                '&:hover': {
                  backgroundColor: '#333',
                },
              }}
              component="button" // Set component to button (this makes it clickable)
              style={{ cursor: 'pointer', padding: '10px' }} // Optional: add some padding and pointer cursor
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2 }} />
        <Button variant="contained" color="secondary" sx={{ width: '100%' }} onClick={handleLogout}>
          Log out
        </Button>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, padding: 3 }}>
        {/* The content for each route will be displayed here */}
        <Outlet /> {/* Outlet renders the nested route content */}
      </Box>
    </Box>
  );
};

export default HomeLayout;
