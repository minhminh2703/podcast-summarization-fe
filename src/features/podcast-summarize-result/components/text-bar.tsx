import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const TextBar: React.FC<{ text: string }> = ({ text }) => {
    return (
        <Box sx={{ marginBottom: 2, width: '100%' }}>
            <StyledTextBar sx={{ width: '100%', borderRadius: 3, }}>
                <Typography variant="body1" sx={{
                    color: 'black',
                    padding: '0.7em',
                    fontSize: '1em',
                    fontFamily: 'IBM Plex Mono',
                }}>
                    {text}
                </Typography>
            </StyledTextBar>
        </Box>
    );
};

const StyledTextBar = styled(Box)({
    backgroundColor: '#d3d2d2',
    borderRadius: '20px',
    border: '1px solid #4A4A4A',
    paddingLeft: '10px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    marginBottom: '15px',
});

export default TextBar;
