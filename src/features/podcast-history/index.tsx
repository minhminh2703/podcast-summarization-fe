import React, { useState, useMemo, ChangeEvent, useEffect } from 'react';
import {
    Card,
    CardMedia,
    CardHeader,
    TextField,
    Typography,
    Box,
    Button,
    Chip,
    CircularProgress,
} from '@mui/material';
import Grid from '@mui/material/Grid2'
import { SwapVert as SortIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { getAllPodcasts } from '../../api/user.api';

export interface HistoryItemData {
    podcast_id: string;
    thumbnail_url: string;
    title: string;
    created_at: Date;
    language: string;
}

// interface DetailSummarization {
//     header: string;
//     title: string;
//     start: number;
//     end: number;
//     content: string;
// }

// interface PodcastSummary {
//     detailSummarization: DetailSummarization[];
//     thumbnailUrl: string;
//     title: string;
//     overallSummarization: string;
//     createdAt: Date;
// }

interface PodcastSummaryList {
    podcasts: HistoryItemData[];
}

interface HistoryItemProps extends HistoryItemData {
    onOpen: (podcast_id: string) => void;
}

export const HistoryItem: React.FC<HistoryItemProps> = ({
    podcast_id,
    thumbnail_url,
    title,
    created_at,
    language,
    onOpen,
}) => (
    <Card
        onClick={() => onOpen(podcast_id)}
        sx={{ maxWidth: 345, backgroundColor: '#212121', borderRadius: '5%', padding: 1 }}
    >
        <CardMedia
            component="img"
            height="150"
            image={thumbnail_url}
            alt={title}
            sx={{ borderRadius: '5%', objectFit: 'cover', marginBottom: 1 }}
        />
        <CardHeader
            title={
                <Typography sx={{
                    fontFamily: 'Winky Rough',
                    fontSize: '1.2em',
                    color: '#F7F7F7',
                    fontWeight: '600',
                    textAlign: 'left',
                    marginBottom: 0,
                    padding: 1,
                    py: 0,
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    overflow: 'hidden',
                }} >
                    {title}
                </Typography>
            }
            sx={{
                textAlign: 'flex-start',
                fontSize: '1em',
                padding: 0
            }}
            subheader={(
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        p: 0,
                        paddingTop: 1.5
                    }}
                >
                    <Chip
                        label={language.toUpperCase()}
                        size="small"
                        variant="outlined"
                        sx={{
                            fontFamily: 'IBM Plex Mono',
                            fontSize: '0.7em',
                            fontWeight: 500,
                            color: '#B0BEC5',
                            borderColor: '#B0BEC5',
                            ml: 1,
                        }}
                    />
                    <Typography
                        component="span"
                        sx={{
                            fontFamily: 'IBM Plex Mono',
                            fontSize: '0.8em',
                            color: '#B0BEC5',
                            fontWeight: 500,
                        }}
                    >
                        {created_at.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </Typography>
                </Box>)}
            slotProps={{
                subheader: {
                    fontFamily: 'IBM Plex Mono',
                    fontSize: '0.8em',
                    color: '#B0BEC5',
                    fontWeight: '500',
                    textAlign: 'right',
                }
            }}
        />
    </Card>
);

interface PodcastHistoryProps {
    items: HistoryItemData[];
}

export const PodcastHistory: React.FC<PodcastHistoryProps> = ({ items }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [sortNewestFirst, setSortNewestFirst] = useState<boolean>(true);
    const navigate = useNavigate();

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);
    const toggleSortOrder = () => setSortNewestFirst(prev => !prev);

    const filtered = useMemo(() =>
        items
            .filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) => {
                const diff = a.created_at.getTime() - b.created_at.getTime();
                return sortNewestFirst ? -diff : diff;
            }),
        [items, searchTerm, sortNewestFirst]
    );

    const handleOpen = (id: string) => navigate(`/history/${id}`);

    return (
        <Box sx={{ p: 2, paddingTop: 5 }}>
            <Grid container spacing={5} sx={{ mb: 5 }}>
                <Grid size={{ xs: 12, sm: 6, md: 8 }}>
                    <TextField
                        variant="filled"
                        placeholder='Search history...'
                        fullWidth
                        maxRows={1}
                        value={searchTerm}
                        onChange={handleSearchChange}
                        slotProps={{
                            input: {
                                sx: {
                                    backgroundColor: '#d3d3d3',
                                    borderRadius: 2,
                                    fontFamily: 'IBM Plex Mono',
                                    fontWeight: 500,
                                },
                            },
                        }}
                        sx={{
                            mb: 2,
                            '& .MuiFilledInput-underline:before': {
                                borderBottom: '2px solid transparent',
                            },
                            '& .MuiFilledInput-underline:after': {
                                borderBottom: '3px solid #5B913B',
                            },
                            '& .MuiInputBase-input': {
                                fontFamily: 'IBM Plex Mono',
                                fontWeight: 500,
                                fontSize: '1em',
                                color: '#333',
                                padding: '10px 18px',
                            },
                            '& .MuiInputBase-input:hover': {
                                color: '#5B913B',
                                backgroundColor: '#2C2727',
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                            },

                            '& .MuiInputBase-input:focus': {
                                color: '#5B913B',
                                backgroundColor: '#2C2727',
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                            },

                            '& .MuiFilledInput-root.Mui-focused .MuiInputBase-input': {
                                color: 'white',
                            },
                        }}
                    />
                </Grid>
                <Grid>
                    <Button
                        variant="outlined"
                        startIcon={<SortIcon fontSize="large" />}
                        onClick={toggleSortOrder}
                        sx={{
                            height: 40,
                            backgroundColor: '#5B913B',
                            color: 'white',
                            fontFamily: 'IBM Plex Mono',
                            borderRadius: 2,
                            fontWeight: 600,
                            outline: 'none',
                            ':focus': {
                                outline: 'none',
                            },
                        }}
                    >
                        {sortNewestFirst ? 'Newest first' : 'Oldest first'}
                    </Button>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                {filtered.map(item => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.podcast_id}>
                        <HistoryItem
                            {...item}
                            onOpen={handleOpen}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export const HistoryPage: React.FC = () => {
    const [podcasts, setPodcasts] = useState<HistoryItemData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPodcasts = async () => {
            try {
                const data = await getAllPodcasts();
                const items = data.map((item: any) => ({
                    ...item,
                    created_at: new Date(item.created_at),
                }));
                setPodcasts(items);
            } catch (err) {
                console.error('Fetch podcasts error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPodcasts();
    }, []);

    if (loading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>;
    }

    return <PodcastHistory items={podcasts} />;
};

export default HistoryPage;
