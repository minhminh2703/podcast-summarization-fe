import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, List, ListItem, ListItemButton, ListItemText, Divider, Typography, Button } from '@mui/material';
import { Logout } from '@mui/icons-material';

const Sidebar: React.FC = () => {
    const location = useLocation();

    const menuItems = [
        { label: 'Item-1', path: '/item-1' },
        { label: 'Item-2', path: '/item-2' },
        { label: 'Item-3', path: '/item-3' },
        { label: 'Item-4', path: '/item-4' },
        { label: 'Item-5', path: '/item-5' },
    ];

    const bottomItems = [
        { label: 'Tutorial', path: '/tutorial' },
        { label: 'Document', path: '/document' },
        { label: 'Model', path: '/model' },
        { label: 'Reference', path: '/reference' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <Box
            sx={{
                width: 250,
                height: '100vh',
                backgroundColor: 'black',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 2,
            }}
        >
        <Box>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                PODCASTS SAY WHAT
            </Typography>
            
            <List>
            {menuItems.map(({ label, path }) => (
                <ListItem key={label} disablePadding>
                <ListItemButton component={Link} to={path} sx={{ backgroundColor: isActive(path) ? 'gray' : 'transparent', '&:hover': { backgroundColor: 'gray' } }}>
                    <ListItemText primary={label} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>

            <Divider sx={{ marginY: 2, backgroundColor: 'white' }} />

            <List>
            {bottomItems.map(({ label, path }) => (
                <ListItem key={label} disablePadding>
                <ListItemButton component={Link} to={path} sx={{ backgroundColor: isActive(path) ? 'gray' : 'transparent', '&:hover': { backgroundColor: 'gray' } }}>
                    <ListItemText primary={label} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
        </Box>

        <Box>
            <Button
                startIcon={<Logout />}
                onClick={() => console.log('Logout logic goes here')}
                sx={{ color: 'gray', textTransform: 'none', padding: '8px 16px', width: '100%' }}
            >
                Log out
            </Button>
        </Box>
        </Box>
    );
};

export default Sidebar;
