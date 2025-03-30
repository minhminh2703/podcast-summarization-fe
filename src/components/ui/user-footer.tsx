import {
    Avatar,
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Typography
} from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import React from 'react';

export default function UserFooter() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        window.location.href = '/auth';
    };

    return (
        <Box sx={{ paddingBottom: 2 }}>
            <Divider variant="middle" sx={{ bgcolor: 'white', borderBottomWidth: 0.9, padding: 0 }} />
            <List sx={{ paddingLeft: 2 }}>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleLogout} sx={{ py: 0 }}>
                        <ListItemIcon>
                            <LogoutOutlinedIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Log out"
                            slotProps={{
                                primary: {
                                    color: 'white',
                                    fontFamily: 'IBM Plex Mono',
                                    fontWeight: '400',
                                    fontSize: '0.8em',
                                }
                            }}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider variant="middle" sx={{ bgcolor: 'white', borderBottomWidth: 0.9, padding: 0 }} />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.7,
                    padding: 2,
                    paddingLeft: 4,
                    color: 'white',
                    fontSize: '12px',
                    cursor: 'pointer'
                }}
                onClick={handleOpenMenu}
            >
                <Avatar
                    src=""
                    sx={{ width: 28, height: 28 }}
                />
                <Typography noWrap variant="body2" sx={{
                    fontFamily: 'IBM Plex Mono',
                    fontWeight: '400',
                    fontSize: '1.1em'
                }}>
                    nguyenthiminhminh.hcm@gmail.com
                </Typography>
            </Box>

            {/* Optional: future popup menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: '#1c1c1c',
                            color: 'white',
                            fontFamily: 'IBM Plex Mono',
                            borderRadius: 2,
                        }
                    }
                }}

            >
                <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Settings</MenuItem>
            </Menu>
        </Box>
    );
}