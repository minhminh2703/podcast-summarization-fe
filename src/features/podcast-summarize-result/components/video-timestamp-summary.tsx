import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const VideoAndTimestampSummary: React.FC = () => {
    return (
        <Box sx={{  
            display: 'flex', 
            flexDirection: 'column', 
            marginRight: 1, 
            borderRight: '2px solid #E0E0E0', 
            paddingLeft: 2,
            paddingRight: 2 
        }}>
            {/* Title and Back Icon Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <ArrowBack 
                    sx={{
                        color: '#E0E0E0',
                        marginRight: 2, // Space between the icon and the title
                        cursor: 'pointer',
                        fontSize: '18px',
                    }}
                    onClick={() => window.history.back()} // Go back to the previous page
                />
                <Typography variant="h6" sx={{ color: '#E0E0E0', fontSize: '15px' }}>
                    Những đứa trẻ đã từng xuất chúng | Podcast
                </Typography>
            </Box>

            {/* Video Section */}
            <Box sx={{ marginBottom: 2 }}>
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/mbUUdl_dMcI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </Box>

            {/* Timestamp Summary */}
            <Paper sx={{ padding: 2, backgroundColor: 'transparent', color: 'white' }}>
                <Box sx={{ marginBottom: 2 }}>
                    {/* First Timestamp */}
                    <Typography variant="body1" sx={{ color: 'yellow', fontWeight: 'bold', display: 'inline', fontSize: '16px' }}>
                        00:00
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'yellow', fontWeight: 'bold', display: 'inline', marginLeft: 1, fontSize: '14px' }}>
                        Introduction
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: 1, fontSize: '12px' }}>
                        Some introduction text and background information...
                    </Typography>
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                    {/* Second Timestamp */}
                    <Typography variant="body1" sx={{ color: 'yellow', fontWeight: 'bold', display: 'inline', fontSize: '16px' }}>
                        00:36
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'yellow', fontWeight: 'bold', display: 'inline', marginLeft: 1, fontSize: '14px' }}>
                        Additional Thoughts
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: 1, fontSize: '12px' }}>
                        Some additional thoughts on the topic discussed...
                    </Typography>
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                    {/* Third Timestamp */}
                    <Typography variant="body1" sx={{ color: 'yellow', fontWeight: 'bold', display: 'inline', fontSize: '16px' }}>
                        01:00
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'yellow', fontWeight: 'bold', display: 'inline', marginLeft: 1, fontSize: '14px' }}>
                        In-depth Analysis
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: 1, fontSize: '12px' }}>
                        More in-depth analysis on the current topic...
                    </Typography>
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                    {/* Fourth Timestamp */}
                    <Typography variant="body1" sx={{ color: 'yellow', fontWeight: 'bold', display: 'inline', fontSize: '16px' }}>
                        01:50
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'yellow', fontWeight: 'bold', display: 'inline', marginLeft: 1, fontSize: '14px' }}>
                        Final Thoughts
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: 1, fontSize: '12px' }}>
                        Final thoughts and conclusions on the subject matter...
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default VideoAndTimestampSummary;
