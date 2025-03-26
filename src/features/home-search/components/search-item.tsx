import React from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Grid, Typography } from '@mui/material';

const SearchItem: React.FC = () => {
  const { itemName } = useParams(); // Get the dynamic part from the URL

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" color="white" gutterBottom>
        {itemName?.toUpperCase() || 'Welcome'}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <TextField
            label="Paste Podcast URL here"
            fullWidth
            variant="outlined"
            sx={{ backgroundColor: 'white' }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" color="primary" sx={{ width: '100%' }}>
            SUMMARIZE NOW
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchItem;
