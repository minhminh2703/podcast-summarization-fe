// components/AuthInputFields.tsx
import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, TextFieldProps } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface AuthInputFieldsProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

const AuthInputFields: React.FC<AuthInputFieldsProps> = ({email, password, setEmail, setPassword}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <TextField
        label="Email address"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        {...commonStyles}
        slotProps={{
          input: {
            style: { borderRadius: '5px', backgroundColor: 'rgba(0,0,0,0.4)' },
          },
        }}
      />
      <TextField
        label="Password"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        {...commonStyles}
        slotProps={{
          input: {
            style: { borderRadius: '5px', backgroundColor: 'rgba(0,0,0,0.4)' },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <Visibility sx={{ color: 'white' }} />
                  ) : (
                    <VisibilityOff sx={{ color: 'white' }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </div>
  );
};

export default AuthInputFields;

const commonStyles: TextFieldProps = {
  fullWidth: true,
  variant: 'filled',
  margin: "normal",
  size: "small",
  sx: {
      '& .MuiInputLabel-root': {
          fontFamily: 'IBM Plex Mono',
          fontWeight: '400',
          fontSize: '0.8em',
          color: 'white',
      },
      '& .MuiInputBase-input': {
          fontFamily: 'IBM Plex Mono',
          fontWeight: '500',
          fontSize: '0.9em',
          color: 'white',
      },
      '& .MuiFilledInput-underline:before': {
          borderBottom: '2px solid transparent',
      },
      '& .MuiFilledInput-underline:after': {
          borderBottom: '3px solid #5B913B',
      },
      '& .MuiInputLabel-root.Mui-focused': {
          color: '#3A7D44',
          fontWeight: '600',
      },
  }
}