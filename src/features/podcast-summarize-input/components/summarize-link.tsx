import { Box, TextField, Button, Typography, List } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { summarizePodcast } from '../../../api/podcast.api';

interface SummarizeLinkInputProps {
    language: 'English' | 'Vietnamese';
}

const SummarizeLinkInput: React.FC<SummarizeLinkInputProps> = ({ language }) => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSummarize = async () => {
        setLoading(true);
        try {
            const response = await summarizePodcast(url, language);
            const podcastId = response.podcast_id; // Assuming the response contains the podcast ID
            console.log('Summary:', response.data);

            navigate(`/history/${podcastId}`); 
            // you can do something with response here, like show it on UI
        } catch (error) {
            console.error('Error summarizing podcast:', error);
        } finally {
            setLoading(false); // stop loading
        }
    };

    const items = [
        { text: 'YouTube Videos / Podcasts', icon: <FaYoutube style={{ color: '#B33030', fontSize: '1.2em' }} /> },
        { text: 'RSS: Listen Notes/ Castos', icon: <FaSpotify style={{ color: '#1DB954', fontSize: '1.2em' }} /> },
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
                    onChange={(e) => setUrl(e.target.value)}
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
                    onClick={handleSummarize}
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
                    {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'SUMMARIZE NOW'}
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

export default SummarizeLinkInput;

