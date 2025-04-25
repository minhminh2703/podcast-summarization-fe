import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from '../ui/nav-bar';
import { UserInfo } from '../../api/user.api';
import { User } from '../../types/user';
import { useNavigate } from 'react-router-dom';

interface StepCardProps {
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ title, description }) => {
  return (
      <Paper
          sx={{
              padding: 2,
              backgroundColor: '#211d1d',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
          }}
      >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {title}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
              {description}
          </Typography>
      </Paper>
  );
};

const HomeLayout: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('user_id');
    if (storedUserId) {
      UserInfo(storedUserId)
        .then(data => setUser(data))
        .catch(err => console.error('Failed to fetch user info:', err));
    }
  }, []);

  const handleSummarizeClick = () => {
    navigate('/summarize'); // Navigate to /summarize on button click
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <NavBar userEmail={user?.email} userAvatarUrl={user?.profile_picture || ''} />
      <Box component="main" sx={{ flex: 1, p: 2, bgcolor: '#292525', padding: '40px 100px' }}>
        {/* Title */}
        <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 4, fontFamily: 'IBM Plex Mono', }}>
          PODCAST SUMMARIZATION WITH AI
        </Typography>

        {/* Summarize Button */}
        <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
          <Button 
            fullWidth
            variant="contained" 
            sx={{
              backgroundColor: 'black', // Dark background color
              color: '#FFFFFF', // White text color
              borderRadius: '10px', // Rounded corners
              padding: '12px 30px', // Padding for a spacious button
              fontSize: '16px', // Font size for readability
              textTransform: 'none', // Keep text case as is (not uppercase)
              fontWeight: 'bold', // Bold text
              letterSpacing: '0.5px', // Slight letter spacing for aesthetics
              border: '10px solid #211d1d',
              '&:hover': {
                  backgroundColor: '#333333', // Darker background on hover
                  border: '10px solid #211d1d',
              },
            }}
            onClick={handleSummarizeClick}
          >
            SUMMARIZE
          </Button>
        </Box>

        {/* How to Summarize Section */}
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2, fontFamily: 'IBM Plex Mono', textAlign: 'start' }}>
          How to summarize a Podcast?
        </Typography>
        <Grid container spacing={4} sx={{ marginBottom: 4 }}>
          <Grid item xs={12} sm={4}>
            <StepCard
              title="Step 1: Input Podcast RSS Feed URL"
              description="Select the podcast you want to summarize and input podcast RSS Feed URL to our platform."
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <StepCard
              title="Step 2: Click Summarize button"
              description="Click black button 'Summarize' beside the input box. The advanced AI algorithm analyze the podcast content."
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <StepCard
              title="Step 3: Receive your summary"
              description="Get a concise summary of the podcast episode, allowing you to grasp the main points without spending the entire duration listening."
            />
          </Grid>
        </Grid>

        {/* Models Used Section */}
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2, fontFamily: 'IBM Plex Mono', textAlign: 'start', marginTop: 8 }}>
          Our models used in Podcast Summarization
        </Typography>
        <Paper sx={{ padding: 2, backgroundColor: '#211d1d', marginBottom: 4, color: 'white', textAlign: 'justify' }}>
          <Typography variant="body1" sx={{ color: 'white' }}>
            In a world where possibilities seem endless, the art of exploration takes center stage. Whether it’s venturing into uncharted territories or diving into the depths of the human mind, the pursuit of discovery remains a timeless endeavor. This harmony inspires innovation, driving humanity forward into a future full of promise and potential. Key aspects of this journey include:
          </Typography>
          <Box sx={{ marginBottom: 2 }} />
          <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: 2, alignContent: 'justify', display: 'inline' }}>
            Innovation through technology:  
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1, display: 'inline' }}>
            Blending creativity with cutting-edge tools to unlock new opportunities. &nbsp;&nbsp;
          </Typography>
          <br />
          <Box sx={{ marginBottom: 2 }} />
          <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: 2, display: 'inline' }}>
            Overcoming challenges: 
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1, display: 'inline' }}>
            Transforming obstacles into stepping stones through resilience and problem-solving. &nbsp;&nbsp;
          </Typography>
          <br />
          <Box sx={{ marginBottom: 2 }} />
          <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: 2, display: 'inline' }}>
            Human imagination: 
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1, display: 'inline' }}>
            The driving force behind progress, enabling bold ideas and breakthroughs.
          </Typography>
        </Paper>

        {/* Category Cards Section */}
        <Grid container spacing={2} sx={{ marginBottom: 4 }}>
          <Grid item xs={12} sm={4}>
            <Paper 
              sx={{
                padding: 3,
                backgroundColor: '#211d1d',
                height: '150px', // Adjust height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: 'white',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'start' }}>
                TIPS IN DAILY LIFE
              </Typography>
              <Box 
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  height: '100%', // The white box will fill the height
                  marginTop: 2,  // Adds space between the title and the white box
                }}
              />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper 
              sx={{
                padding: 3,
                backgroundColor: '#211d1d',
                height: '150px', // Adjust height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: 'white',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'start' }}>
                NEW TECHNOLOGY
              </Typography>
              <Box 
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  height: '100%', // The white box will fill the height
                  marginTop: 2,  // Adds space between the title and the white box
                }}
              />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper 
              sx={{
                padding: 3,
                backgroundColor: '#211d1d',
                height: '150px', // Adjust height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: 'white',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'start' }}>
                BELIEF & RELIGION
              </Typography>
              <Box 
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  height: '100%', // The white box will fill the height
                  marginTop: 2,  // Adds space between the title and the white box
                }}
              />
            </Paper>
          </Grid>
        </Grid> 
      </Box>
    </Box>
  );
};

export default HomeLayout;
