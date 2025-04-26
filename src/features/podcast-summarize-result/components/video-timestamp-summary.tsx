import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, CircularProgress } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { getPodcastById } from '../../../api/podcast.api';

interface DetailSummarization {
    header: string;
    title: string;
    start: number;
    end: number;
    content: string;
}

interface PodcastDetail {
    podcast_id: string;
    detail_summarization: DetailSummarization[];
    thumbnail_url: string;
    title: string;
    overall_summarization: string;
    language: string;
    created_at: string;
}

interface VideoAndTimestampSummaryProps {
    podcast_id: string | undefined;
}

const VideoAndTimestampSummary: React.FC<VideoAndTimestampSummaryProps> = ({ podcast_id }) => {
    const navigate = useNavigate();
    const [data, setData] = useState<PodcastDetail | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!podcast_id) {
            setError('No podcast ID provided');
            setLoading(false);
            return;
        }
        const fetchData = async () => {
            try {
                const res = await getPodcastById(podcast_id);
                setData(res);
            } catch (err: any) {
                console.error('Error fetching podcast:', err);
                setError(err.response?.data?.detail || err.message || 'Failed to load');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [podcast_id]);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ p: 2 }}>
                <Typography color="error">{error}</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', mr: 1, borderRight: '2px solid #E0E0E0', px: 2 }}>
            {/* Title and Back Icon Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <ArrowBack
                    sx={{ color: '#E0E0E0', mr: 2, cursor: 'pointer', fontSize: 18 }}
                    onClick={() => navigate(-1)}
                />
                <Typography variant="h6" sx={{ color: '#E0E0E0', fontSize: 15 }}>
                    {data?.title}
                </Typography>
            </Box>

            {/* Video Section */}
            <Box sx={{ mb: 2 }}>
                <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${extractYouTubeId(data!.thumbnail_url)}`}
                    title={data!.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </Box>

            {/* Timestamp Summary */}
            <Paper sx={{ p: 2, bgcolor: 'transparent', color: 'white' }}>
                {data?.detail_summarization.map((seg, idx) => (
                    <Box key={idx} sx={{ mb: 2 }}>
                        <Typography
                            variant="body1"
                            sx={{ color: 'yellow', fontWeight: 'bold', display: 'inline', fontSize: 16 }}
                        >
                            {formatTime(seg.start)}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: 'yellow', fontWeight: 'bold', display: 'inline', ml: 1, fontSize: 14 }}
                        >
                            {seg.title}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, fontSize: 12 }}>
                            {seg.content}
                        </Typography>
                    </Box>
                ))}
            </Paper>
        </Box>
    );
};

// Helper to convert seconds to mm:ss
function formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

// Example: extract YouTube ID from thumbnail_url or other field
function extractYouTubeId(url: string): string {
    const match = url.match(/embed\/(.+)$/);
    return match?.[1] || '';
}

export default VideoAndTimestampSummary;
