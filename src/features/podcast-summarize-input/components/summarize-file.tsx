import React, { useCallback } from 'react';
import { Button, Typography, Box, Container, Paper, Divider } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import UploadFileIcon from '@mui/icons-material/UploadFile';


const SummarizeFileInput: React.FC = () => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        console.log(acceptedFiles);
    }, []);

    // Dropzone options
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'audio/*': ['.mp3', '.wav'],
            'video/*': ['.mp4', '.avi'],
        },
        maxSize: 40 * 1024 * 1024,
    });

    return (
        <Container maxWidth="sm">
            <Paper
                sx={{
                    borderRadius: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 4,
                    borderWidth: 5,
                    minHeight: 200,
                    backgroundColor: '#D6CC99',
                    cursor: 'pointer',
                }}
                {...getRootProps()}
            >
                <input {...getInputProps()} />
                <UploadFileIcon fontSize="large" sx={{ fontSize: '4em', color: '#29435C' }} />
                <Typography variant="h6" sx={{ marginTop: 2, fontFamily: 'IBM Plex Mono', fontSize: '1em' }}>
                    Drag and drop a file to summarize
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1, fontFamily: 'IBM Plex Mono', fontSize: '0.8em' }}>
                    Audio, Video files: max 40MB
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: 4 }}>
                    <Divider sx={{ width: '100%', borderColor: 'black', borderBottomWidth: 1.5 }} />
                    <Box
                        sx={{
                            position: 'absolute',
                            backgroundColor: '#D6CC99',
                            padding: '0 10px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography sx={{ fontWeight: 'bold', color: 'black', fontFamily: 'IBM Plex Mono' }}>OR</Typography>
                    </Box>
                </Box>

                {/* File upload button */}
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3.5 }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: 'black',
                            borderRadius: 2,
                            fontFamily: 'IBM Plex Mono',
                            fontWeight: '600',
                            ":focus": {
                                outline: 'none'
                            }
                        }}
                    >
                        CHOOSE A FILE
                        <input hidden accept="*" type="file" />
                    </Button>
                </Box>
            </Paper>
        </Container >
    );
};

export default SummarizeFileInput;
