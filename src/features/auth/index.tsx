import { Box, Button, Checkbox, FormControlLabel, Tab, Tabs, Typography, Alert } from '@mui/material';
import * as React from 'react';
import podcastBg from '../../assets/podcast_bg.jpg';
import AuthInputFields from './components/auth-input-fields';
import { Login, Register } from '../../api/auth.api';
import { useNavigate } from 'react-router-dom';
import CustomTabPanel from '../../components/custom-tab-panel';

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

type AuthTabsFormProps = {
    setIsAuthenticated: (isAuthenticated: boolean) => void;
};

export default function AuthTabsForm({ setIsAuthenticated }: AuthTabsFormProps) {
    const [value, setValue] = React.useState(0);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState<string | null>(null);
    const [success, setSuccess] = React.useState<string | null>(null);
    const navigate = useNavigate();

    const handleChangeTab = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setError(null);
        setSuccess(null);
    };

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Email and password are required');
            return;
        }
        setError(null);

        try {
            const { access_token } = await Login(email, password);
            if (!access_token) {
                setError('Login failed: no access token returned');
                return;
            }
            localStorage.setItem('access_token', access_token);
            navigate('/');
            setIsAuthenticated(true);
        } catch (err: any) {
            console.error('Login error:', err);
            const status = err.response?.status;
            const msg = status === 422
                ? 'Invalid email or password'
                : err.response?.data?.detail || err.message || 'Login failed';
            setError(msg);
        }
    };

    const handleRegister = async () => {
        if (!email || !password) {
            setError('Email and password are required');
            return;
        }
        setError(null);
        setSuccess(null);
        try {
            await Register(email, password);
            setSuccess('Registration successful! You can now log in.');
        } catch (err: any) {
            console.error('Registration error:', err);
            let msg = 'Registration failed';
            if (err.response) {
                if (err.response.status === 422) {
                    const details = err.response.data.detail;
                    if (Array.isArray(details) && details.length) {
                        msg = 'You have to provide a valid email address';
                    } else {
                        msg = 'Invalid email address';
                    }
                } else {
                    msg = err.response.data?.detail || err.message;
                }
            } else {
                msg = err.message;
            }
            setError(msg);
        }
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh', flexDirection: 'row' }}>
            <Box
                component="img"
                sx={{ flex: 1, objectFit: 'cover', objectPosition: 'center top', height: '100%', width: '45%' }}
                src={podcastBg}
                alt="Podcast Background"
            />

            <Box
                sx={{
                    flex: 1,
                    width: '30%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#2B2B2B',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ color: 'white', fontFamily: 'IBM Plex Mono', fontWeight: '600', fontSize: { xs: 20, sm: 30, md: 50 } }}
                >
                    Podcasts Say What
                </Typography>

                <Box sx={{ mx: 'auto', mt: 5, backgroundColor: '#1c1c1c', borderRadius: 4, overflow: 'hidden', width: '100%', maxWidth: 500, p: 0 }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', background: 'black', justifyContent: 'center' }}>
                        <Tabs
                            value={value}
                            onChange={handleChangeTab}
                            aria-label="auth tabs"
                            textColor="inherit"
                            variant="fullWidth"
                            sx={{ justifyContent: 'center' }}
                            slotProps={{ indicator: { style: { backgroundColor: '#5B913B' } } }}
                        >
                            <Tab label="LOG IN" {...a11yProps(0)} sx={{ color: 'white', fontFamily: 'IBM Plex Mono', fontWeight: 600, fontSize: '0.9em', '&.Mui-selected': { borderBottom: 'none' }, '&:focus': { outline: 'none' } }} />
                            <Tab label="REGISTRATION" {...a11yProps(1)} sx={{ color: 'white', fontFamily: 'IBM Plex Mono', fontWeight: 600, fontSize: '0.9em', '&:focus': { outline: 'none' } }} />
                        </Tabs>
                    </Box>

                    {/* Login Panel */}
                    <CustomTabPanel value={value} index={0}>
                        <AuthInputFields email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
                        {error && (
                            <Alert severity="error" variant="standard" sx={{ width: '100%', mt: 0, p: 0, backgroundColor: 'transparent', color: '#FF6969', fontFamily: 'IBM Plex Mono', fontWeight: 500, fontSize: '0.8em', display: error ? 'flex' : 'none', alignItems: 'center', '& .MuiAlert-icon': { color: '#FF6969', mr: 1 }, '& .MuiAlert-message': { p: 0 } }}>
                                {error}
                            </Alert>
                        )}
                        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                            <FormControlLabel control={<Checkbox color="success" sx={{ color: 'white' }} />} label={<Typography color="white" sx={{ fontSize: '0.9em', fontFamily: 'IBM Plex Mono', fontWeight: 500 }}>Remember me</Typography>} />
                            <Typography color="white" sx={{ cursor: 'pointer', fontSize: '0.9em', fontFamily: 'IBM Plex Mono', fontWeight: 500 }}>Forget password?</Typography>
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
                        {error && (
                            <Alert severity="error" variant="standard" sx={{ width: '100%', mt: 0, p: 0, backgroundColor: 'transparent', color: '#FF6969', display: error ? 'flex' : 'none', alignItems: 'center', fontFamily: 'IBM Plex Mono', fontWeight: 500, fontSize: '0.8em', '& .MuiAlert-icon': { color: '#FF6969', mr: 1 }, '& .MuiAlert-message': { p: 0 } }}>
                                {error}
                            </Alert>
                        )}
                        {success && (
                            <Alert severity="success" variant="standard" sx={{ width: '100%', mt: 0, p: 0, backgroundColor: 'transparent', color: '#38E54D', display: success ? 'flex' : 'none', alignItems: 'center', fontFamily: 'IBM Plex Mono', fontWeight: 500, fontSize: '0.8em', '& .MuiAlert-icon': { color: '#38E54D', mr: 1 }, '& .MuiAlert-message': { p: 0 } }}>
                                {success}
                            </Alert>
                        )}
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
}
