import React from 'react';
import { Box, Grid } from '@mui/material';
import VideoAndTimestampSummary from './components/video-timestamp-summary';
import FullSummary from './components/full-summary';
import TextBar from './components/text-bar';

const PodcastHistory: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
            <TextBar text='https://www.youtube.com/watch?v=hH7uvZfyEZ8&list=RDMM' /> {/* Search bar on top */}
            
            {/* Main content section with grid layout */}
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <VideoAndTimestampSummary /> {/* Video and timestamp summary on the left */}
                </Grid>
                <Grid item xs={6}>
                <FullSummary /> {/* Full summary on the right */}
                </Grid>
            </Grid>
        </Box>
    );
};

export default PodcastHistory;
