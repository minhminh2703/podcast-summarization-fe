import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from '../ui/nav-bar';
import { UserInfo } from '../../api/user.api';
import { User } from '../../types/user';

const HomeLayout: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('user_id');
    if (storedUserId) {
      UserInfo(storedUserId)
        .then(data => setUser(data))
        .catch(err => console.error('Failed to fetch user info:', err));
    }
  }, []);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <NavBar userEmail={user?.email} userAvatarUrl={user?.profile_picture || ''} />
      <Box component="main" sx={{ flex: 1, p: 2, bgcolor: '#252525' }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default HomeLayout;
