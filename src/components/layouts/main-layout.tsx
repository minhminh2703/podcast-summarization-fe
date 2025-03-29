import { Box, CssBaseline, Drawer, Toolbar } from '@mui/material';
import SideBar from '../ui/side-bar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: 260,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 260,
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(0,0,0,0.9)',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <SideBar />
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, bgcolor: '#0C0C0C', p: 3, minHeight: '100vh' }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}