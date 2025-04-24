import React, { useState, useMemo, ChangeEvent } from 'react';
import {
    Card,
    CardMedia,
    CardHeader,
    TextField,
    Typography,
    Box,
    Button,
} from '@mui/material';
import Grid from '@mui/material/Grid2'
import { SwapVert as SortIcon } from '@mui/icons-material';

export interface HistoryItemData {
    id: string;
    thumbnail: string;
    title: string;
    date: Date;
}

interface HistoryItemProps extends HistoryItemData {
    onOpen: (id: string) => void;
    onDelete: (id: string) => void;
}

export const HistoryItem: React.FC<HistoryItemProps> = ({
    id,
    thumbnail,
    title,
    date,
    onOpen,
}) => (
    <Card sx={{ maxWidth: 345, backgroundColor: '#212121', borderRadius: '5%', padding: 2 }}>
        <CardMedia
            component="img"
            height="150"
            image={thumbnail}
            alt={title}
            sx={{ borderRadius: '5%', objectFit: 'cover', marginBottom: 1.5 }}
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
                }} >
                    {title}
                </Typography>
            }
            subheader={date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })
            }

            slotProps={{
                subheader: {
                    fontFamily: 'IBM Plex Mono',
                    fontSize: '0.8em',
                    color: '#B0BEC5',
                    fontWeight: '500',
                    textAlign: 'right',
                    padding: 1,
                }
            }}
            sx={{
                textAlign: 'flex-start',
                fontSize: '1em',
                padding: 0
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

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);
    const toggleSortOrder = () => setSortNewestFirst(prev => !prev);

    const filtered = useMemo(() =>
        items
            .filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) => {
                const diff = a.date.getTime() - b.date.getTime();
                return sortNewestFirst ? -diff : diff;
            }),
        [items, searchTerm, sortNewestFirst]
    );

    const handleOpen = (id: string) => console.log('Open', id);
    const handleDelete = (id: string) => console.log('Delete', id);

    return (
        <Box sx={{ p: 2 }}>
            <Grid container spacing={5} sx={{ mb: 2 }}>
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
                        startIcon={<SortIcon fontSize="large"/>}
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
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.id}>
                        <HistoryItem
                            {...item}
                            onOpen={handleOpen}
                            onDelete={handleDelete}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

// --- Sample Data & Demo Component ---
const sampleItems: HistoryItemData[] = [
    {
        id: '1',
        thumbnail: 'https://forbes.vn/wp-content/uploads/2023/07/Taylor.webp',
        title: 'Quarterly Report',
        date: new Date('2025-03-29'),
    },
    {
        id: '2',
        thumbnail: 'https://forbes.vn/wp-content/uploads/2023/07/Taylor.webp',
        title: 'Team Photo',
        date: new Date('2025-04-01'),
    },
    {
        id: '3',
        thumbnail: 'https://forbes.vn/wp-content/uploads/2023/07/Taylor.webp',
        title: 'Interview Audio',
        date: new Date('2025-02-14'),
    },
    {
        id: '4',
        thumbnail: 'https://forbes.vn/wp-content/uploads/2023/07/Taylor.webp',
        title: 'Project Summary',
        date: new Date('2025-04-15'),
    },
    {
        id: '5',
        thumbnail: 'https://forbes.vn/wp-content/uploads/2023/07/Taylor.webp',
        title: 'Landscape',
        date: new Date('2025-03-05'),
    },
];

export const HistoryPageDemo: React.FC = () => (
    <PodcastHistory items={sampleItems} />
);

export default HistoryPageDemo;
