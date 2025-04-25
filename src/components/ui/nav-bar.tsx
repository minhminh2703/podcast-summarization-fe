import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Avatar, Link as MuiLink } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

interface NavBarProps {
    userEmail?: string;
    userAvatarUrl?: string;
}

const NavBar: React.FC<NavBarProps> = ({ userEmail, userAvatarUrl }) => {
    const navigate = useNavigate();
    const loggedIn = Boolean(userEmail);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_id');
        navigate(0);
    };

    const handleLogin = () => {
        navigate('/auth');
    };

    return (
        <AppBar position="static" sx={{ bgcolor: '#000', boxShadow: 'none' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{
                        textDecoration: 'none',
                        color: '#fff',
                        fontFamily: 'IBM Plex Mono',
                        fontWeight: '600',
                        fontSize: { xs: 10, sm: 15, md: 20 },
                        '&:hover': {
                            textDecoration: 'none',
                            color: '#5B913B',
                        },
                    }}
                >
                    PODCASTS SAY WHAT
                </Typography>

                <Box>
                    {['Tutorial', 'Document', 'Model', 'Reference'].map(item => (
                        <Button
                            key={item}
                            component={Link}
                            to={`/${item.toLowerCase()}`}
                            sx={{
                                color: '#fff',
                                textTransform: 'none',
                                fontSize: '1rem',
                                fontFamily: 'IBM Plex Mono',
                                fontWeight: '400',
                                mx: 3,
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: '#5B913B',
                                },
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                    {loggedIn && (
                        <MuiLink
                            component="button"
                            underline="hover"
                            onClick={handleLogout}
                            sx={{
                                color: '#fff',
                                ml: 2,
                                fontSize: '1rem',
                                cursor: 'pointer',
                                fontFamily: 'IBM Plex Mono',
                            }}
                        >
                            Log out
                        </MuiLink>
                    )}
                </Box>

                <Box display="flex" alignItems="center">
                    {loggedIn ? (
                        <>
                            <Avatar
                                src={userAvatarUrl || ''}
                                alt={userEmail}
                                sx={{ width: 32, height: 32, mr: 1 }}
                            />
                            <Typography variant="body2" sx={{ color: '#fff', fontFamily: 'IBM Plex Mono' }}>
                                {userEmail}
                            </Typography>
                        </>
                    ) : (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleLogin}
                            sx={{
                                backgroundColor: '#5B913B',
                                borderRadius: 2,
                                fontFamily: 'IBM Plex Mono',
                                fontWeight: '800',
                                ':focus': { outline: 'none' },
                            }}
                        >
                            Login
                        </Button>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
