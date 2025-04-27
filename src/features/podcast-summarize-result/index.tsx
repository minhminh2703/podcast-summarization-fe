import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useParams } from 'react-router-dom';
import TextBar from './components/text-bar';
import VideoAndTimestampSummary from './components/video-timestamp-summary';
import FullSummary from './components/full-summary';
import { getPodcastById } from '../../api/podcast.api';

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

const PodcastHistoryResult: React.FC = () => {
    // match the route param name (e.g. '/history/:podcastId')
    const { podcast_id } = useParams<{ podcast_id: string }>();
    const [data, setData] = useState<PodcastDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!podcast_id) {
            setError('Invalid podcast ID');
            setLoading(false);
            return;
        }
        const fetchData = async () => {
            try {
                const res = await getPodcastById(podcast_id);
                setData(res);
            } catch (err: any) {
                console.error('Error fetching detail:', err);
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

    if (error || !data) {
        return (
            <Box sx={{ p: 2 }}>
                <Typography color="error">{error || 'No data available'}</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', p: 2 }}>
            <TextBar text={`https://www.youtube.com/watch?v=${podcast_id}`} />
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <VideoAndTimestampSummary podcast_id={podcast_id} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <FullSummary podcast_id={podcast_id} summary={data.overall_summarization} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default PodcastHistoryResult;
