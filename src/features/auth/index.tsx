import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, Tab, Tabs, Typography } from '@mui/material';
import podcastBg from '../../assets/podcast_bg.jpg';
import AuthInputFields from './components/auth-input-fields';
import { useNavigate } from 'react-router-dom';
import CustomTabPanel from '../../components/custom-tab-panel';
import { Login, Register } from '../../api/auth.api';

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

type AuthTabsFormProps = {
    setIsAuthenticated: (isAuthenticated: boolean) => void;
};

const AuthTabsForm: React.FC<AuthTabsFormProps> = ({ setIsAuthenticated }) => {
    const [value, setValue] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleChangeTab = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleLogin = async () => {
        if (!email || !password) {
            console.error('Email and password are required');
            return;
        }
        try {
            const data = await Login(email, password);
            if (data.access_token) {
                localStorage.setItem('access_token', data.access_token);
                navigate('/');
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const handleRegister = async () => {
        if (!email || !password) {
            console.error('Email and password are required');
            return;
        }
        try {
            const data = await Register(email, password);
            if (data.access_token) {
                navigate('/summarize');
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh', flexDirection: 'row' }}>
            {/* Left Side (Image) */}
            <Box
                component="img"
                sx={{
                    flex: 1,
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    height: '100%',
                    width: '45%',
                }}
                src={podcastBg}
                alt="Podcast Background"
            />

            {/* Right Side (Form) */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#2B2B2B',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: 'white',
                        fontFamily: 'IBM Plex Mono',
                        fontWeight: '600',
                        fontSize: { xs: 20, sm: 30, md: 50 },
                    }}
                >
                    Podcasts Say What
                </Typography>

                <Box
                    sx={{
                        mx: 'auto',
                        mt: 5,
                        backgroundColor: '#1c1c1c',
                        borderRadius: 4,
                        overflow: 'hidden',
                        width: '100%',
                        maxWidth: 500,
                        p: 0,
                    }}
                >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', background: 'black' }}>
                        <Tabs
                            value={value}
                            onChange={handleChangeTab}
                            aria-label="auth tabs"
                            textColor="inherit"
                            variant="fullWidth"
                            sx={{ justifyContent: 'center' }}
                            slotProps={{
                                indicator: {
                                    style: { backgroundColor: 'white' },
                                },
                            }}
                        >
                            <Tab label="LOG IN" {...a11yProps(0)} sx={{ color: 'white', fontFamily: 'IBM Plex Mono', fontWeight: 600, fontSize: '0.9em', '&.Mui-selected': { borderBottom: 'none' } }} />
                            <Tab label="REGISTRATION" {...a11yProps(1)} sx={{ color: 'white', fontFamily: 'IBM Plex Mono', fontWeight: 600, fontSize: '0.9em' }} />
                        </Tabs>
                    </Box>

                    {/* Login Panel */}
                    <CustomTabPanel value={value} index={0}>
                        <AuthInputFields email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
                        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                            <FormControlLabel
                                control={<Checkbox color="success" sx={{ color: 'white' }} />}
                                label={<Typography color="white" sx={{ fontSize: '0.9em', fontFamily: 'IBM Plex Mono', fontWeight: 500 }}>Remember me</Typography>}
                            />
                            <Typography color="white" sx={{ cursor: 'pointer', fontSize: '0.9em', fontFamily: 'IBM Plex Mono', fontWeight: 500 }}>
                                Forget password?
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="center" mt={2}>
                            <Button variant="contained" sx={{ backgroundColor: 'black', borderRadius: 2, width: '10em', fontFamily: 'IBM Plex Mono', fontWeight: 600 }} onClick={handleLogin}>
                                LOGIN
                            </Button>
                        </Box>
                    </CustomTabPanel>

                    {/* Registration Panel */}
                    <CustomTabPanel value={value} index={1}>
                        <AuthInputFields email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
                        <Box display="flex" justifyContent="center" mt={2}>
                            <Button variant="contained" sx={{ backgroundColor: 'black', borderRadius: 2, width: '10em', fontFamily: 'IBM Plex Mono', fontWeight: 600 }} onClick={handleRegister}>
                                SUBMIT
                            </Button>
                        </Box>
                    </CustomTabPanel>
                </Box>
            </Box>
        </Box>
    );
};

export default AuthTabsForm;
