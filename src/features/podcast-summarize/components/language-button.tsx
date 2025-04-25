import React, { useState } from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';

type Language = 'en' | 'vi';

const languageMap: Record<Language, { code: string; flag: string; bgColor: string }> = {
  en: {
    code: 'En',
    flag: 'https://flagcdn.com/w80/us.png',
    bgColor: '#1e3a8a',
  },
  vi: {
    code: 'Vi',
    flag: 'https://flagcdn.com/w80/vn.png',
    bgColor: '#e11d48',
  },
};

const LanguageToggleButton: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const current = languageMap[language];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'vi' : 'en'));
  };

  return (
    <ButtonBase
      onClick={toggleLanguage}
      sx={{
        display: 'flex',
        width: 130,
        height: 50,
        marginLeft: 2,
        borderRadius: '999px',
        overflow: 'hidden',
        boxShadow: 2,
        cursor: 'pointer',
        padding: 0,
      }}
    >
      {/* Left side with circular flag */}
      <Box
        sx={{
          width: '50%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: current.bgColor,
        }}
      >
        <Box
          component="img"
          src={current.flag}
          alt={current.code}
          sx={{
            width: 34,
            height: 34,
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Right side with text */}
      <Box
        sx={{
          width: '50%',
          height: '100%',
          backgroundColor: current.bgColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="body1"
          fontWeight="bold"
          color="#fff"
          sx={{ fontSize: '1.1rem', fontFamily: 'IBM Plex Mono' }}
        >
          {current.code}
        </Typography>
      </Box>
    </ButtonBase>
  );
};

export default LanguageToggleButton;
