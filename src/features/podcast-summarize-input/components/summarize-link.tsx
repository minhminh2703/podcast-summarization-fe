import { Box, TextField, Button, Typography, List } from '@mui/material';
import { FaSpotify, FaYoutube } from 'react-icons/fa';


export default function SummarizeLinkInput() {
    const items = [
        { text: 'YouTube Videos / Podcasts', icon: <FaYoutube style={{ color: '#B33030', fontSize: '1.2em' }} /> },
        { text: 'Spotify Podcasts', icon: <FaSpotify style={{ color: '#1DB954', fontSize: '1.2em' }} /> },
    ]
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', gap: 5 }}>
            <Box
                sx={{
                    backgroundColor: '#2C2727',
                    borderRadius: '15px',
                    padding: 2,
                    width: '100%',
                    maxWidth: 900,
                    mx: 'auto',
                }}
            >
                <TextField
                    variant="filled"
                    placeholder="Paste podcast URL here..."
                    fullWidth
                    id="filled-multiline-flexible"
                    maxRows={1}
                    size="medium"
                    slotProps={{
                        input: {
                            sx: {
                                backgroundColor: '#d3d3d3',
                                borderRadius: 2,
                                fontFamily: 'IBM Plex Mono',
                                fontWeight: 500,
                            },
                        },
                    }}
                    sx={{
                        mb: 2,
                        '& .MuiFilledInput-underline:before': {
                            borderBottom: '2px solid transparent',
                        },
                        '& .MuiFilledInput-underline:after': {
                            borderBottom: '3px solid #5B913B',
                        },
                        '& .MuiInputBase-input': {
                            fontFamily: 'IBM Plex Mono',
                            fontWeight: 500,
                            fontSize: '1em',
                            color: '#333',
                            padding: '15px 18px',
                        },
                        '& .MuiInputBase-input:focus': {
                            color: '#5B913B'
                        },
                        '& .MuiFilledInput-root.Mui-focused .MuiInputBase-input': {
                            color: 'white',
                        },
                    }}
                />
                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        py: 1.2,
                        backgroundColor: 'black',
                        color: 'white',
                        borderRadius: 2,
                        fontWeight: 700,
                        fontFamily: 'IBM Plex Mono',
                        fontSize: '1em',
                        '&:hover': {
                            backgroundColor: '#1A1A1D',
                        },
                    }}
                >
                    SUMMARIZE NOW
                </Button>
            </Box>
            <Box
                sx={{
                    padding: 2,
                    width: '100%',
                    maxWidth: 900,
                    mx: 'auto',
                }}>
                <Typography>
                    <span style={{ color: 'white', fontWeight: 400, fontFamily: 'IBM Plex Mono', fontSize: '0.8em' }}>Supported Summary Links</span>
                </Typography>
                <List>
                    {items.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                padding: 0.5,
                            }}
                        >
                            {item.icon}
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'white',
                                    fontFamily: 'IBM Plex Mono',
                                    fontWeight: 400,
                                    fontSize: '0.7em',
                                }}
                            >
                                {item.text}
                            </Typography>
                        </Box>
                    ))}
                </List>
            </Box>
        </Box>
    );
}
