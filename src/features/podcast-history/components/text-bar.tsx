import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const TextBar: React.FC<{ text: string }> = ({ text }) => {
    return (
        <Box sx={{ marginBottom: 2, width: '100%', borderBottom: '2px solid white' }}>
            <StyledTextBar>
                <Typography variant="body1" sx={{ color: 'black', padding: '10px' }}>
                    {text}
                </Typography>
            </StyledTextBar>
        </Box>
    );
};

// Styled component for the text bar
const StyledTextBar = styled(Box)({
    backgroundColor: '#d3d2d2', // Dark background
    borderRadius: '20px', // Rounded corners
    border: '1px solid #4A4A4A', // Border color
    paddingLeft: '10px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    marginBottom: '15px',
});

export default TextBar;
