import React from 'react';
import { Box, Typography, Button, Paper, IconButton } from '@mui/material';
import { Add, ContentCopy, Download } from '@mui/icons-material';

interface FullSummaryProps {
    podcast_id: string | undefined;
    summary?: string;
}

const FullSummary: React.FC<FullSummaryProps> = ({ summary }) => {
    const handleCopy = () => {
        // Logic to copy the summary text to clipboard
        const summaryText = document.getElementById('summary-text')?.innerText || '';
        navigator.clipboard.writeText(summaryText).then(() => {
            alert('Summary copied to clipboard!');
        });
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Buttons Section */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#2C2727', // Black background
                        color: '#FFFFFF', // White text
                        borderRadius: '20px', // Rounded corners
                        padding: '8px 20px', // Padding for the button
                        '&:hover': { backgroundColor: '#333333' }, // Darker background on hover
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                    }}
                    endIcon={<Add />} // Add the "+" icon
                >
                    New podcast
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#2C2727', // Black background
                        color: '#FFFFFF', // White text
                        borderRadius: '20px', // Rounded corners
                        padding: '8px 20px', // Padding for the button
                        '&:hover': { backgroundColor: '#333333' }, // Darker background on hover
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                    }}
                    endIcon={<Download />} // Add the "+" icon
                >
                    Download
                </Button>
            </Box>

            {/* Summary Section */}
            <Paper sx={{ 
                padding: 3, 
                backgroundColor: 'transparent', 
                color: 'white', 
                borderRadius: '10px',
                border: '2px solid rgb(90, 49, 9)', // Brown border color 
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                        Summary
                    </Typography>
                    <IconButton
                        sx={{ color: '#E0E0E0' }}
                        onClick={handleCopy}
                        title="Copy summary to clipboard"
                    >
                        <ContentCopy />
                    </IconButton>
                </Box>

                <Typography variant="body1" sx={{ marginBottom: 1, fontSize: '14px' }}>
                    {summary}
                </Typography>
            </Paper>
        </Box>
    );
};

export default FullSummary;
