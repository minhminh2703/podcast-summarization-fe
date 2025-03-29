// components/layouts/sidebar.tsx
import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
import {
    RestorePageOutlined as RestorePageOutlinedIcon,
    Book as BookIcon,
    School as SchoolIcon,
    SummarizeOutlined as SummarizeOutlinedIcon,
    Description as DescriptionIcon,
    Build as BuildIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import UserFooter from './user-footer';

const items = ['Tutorial', 'Document', 'Model', 'Reference'];
const icons = [
    <SchoolIcon sx={{ color: 'white' }} />,
    <DescriptionIcon sx={{ color: 'white' }} />,
    <BuildIcon sx={{ color: 'white' }} />,
    <BookIcon sx={{ color: 'white' }} />,
];
const routeItems = ['/tutorial', '/document', '/model', '/reference'];

export default function SideBar() {
    return (
        <>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                    paddingTop: 4,
                    color: 'white',
                    fontFamily: 'IBM Plex Mono',
                    fontWeight: '600',
                    fontSize: { xs: 10, sm: 15, md: 20 },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Link
                    to="/summarize"
                    style={{
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                >
                    PODCASTS SAY WHAT
                </Link>
            </Typography>

            <Toolbar />
            <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                <Box>
                    <List sx={{ paddingLeft: 2 }}>
                        {['Summarize', 'History'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton component={Link} to={index === 0 ? '/summarize' : '/history'}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? (
                                            <SummarizeOutlinedIcon sx={{ color: 'white' }} />
                                        ) : (
                                            <RestorePageOutlinedIcon sx={{ color: 'white' }} />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={text}
                                        slotProps={{
                                            primary: {
                                                color: 'white',
                                                fontFamily: 'IBM Plex Mono',
                                                fontWeight: '400',
                                                fontSize: '0.8em',
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider variant="middle" sx={{ bgcolor: 'white', borderBottomWidth: 0.9 }} />
                    <List sx={{ paddingLeft: 2 }}>
                        {items.map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton component={Link} to={routeItems[index]}>
                                    <ListItemIcon>{icons[index]}</ListItemIcon>
                                    <ListItemText
                                        primary={text}
                                        slotProps={{
                                            primary: {
                                                color: 'white',
                                                fontFamily: 'IBM Plex Mono',
                                                fontWeight: '400',
                                                fontSize: '0.8em',
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <UserFooter />
            </Box>
        </>
    );
}
