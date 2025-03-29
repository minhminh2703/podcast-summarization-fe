import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import CustomTabPanel from '../../components/custom-tab-panel';
import SummarizeLinkInput from './components/summarize-link';
import SummarizeFileInput from './components/summarize-file';
import LinkIcon from '@mui/icons-material/Link';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { BorderBottom } from '@mui/icons-material';

enum TabValue {
  SUMMARIZE_LINK = 0,
  SUMMARIZE_FILE = 1,
}

const PodcastSummarize: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabValue>(TabValue.SUMMARIZE_LINK);

  const handleTabChange = (event: React.SyntheticEvent, newTabValue: TabValue) => {
    setSelectedTab(newTabValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        textColor="inherit"
        variant="standard"
        sx={{ maxHeight: 50, padding: 0, marginLeft: 4, paddingLeft: 10, marginBottom: 5 }}
        slotProps={{ indicator: { style: { backgroundColor: '#5B913B', height: 2 } } }}

      >
        <Tab icon={<LinkIcon />} iconPosition="start" label='Link' value={TabValue.SUMMARIZE_LINK} sx={{
          color: 'white',
          paddingBottom: 2,
          fontFamily: 'IBM Plex Mono',
          fontSize: '1em',
          fontWeight: '600',
          ":focus": {
            outline: 'none',
          },
          "&.Mui-selected": {
            BorderBottom: 'none',
          }
        }} />
        <Tab icon={<AttachFileIcon />} iconPosition="start" label='File upload' value={TabValue.SUMMARIZE_FILE} sx={{
          color: 'white',
          paddingBottom: 2,
          fontFamily: 'IBM Plex Mono',
          fontSize: '1em',
          fontWeight: '600',
          ":focus": {
            outline: 'none',
          },
          "&.Mui-selected": {
            BorderBottom: 'none',
          }
        }} />
      </Tabs>

      <CustomTabPanel value={selectedTab} index={TabValue.SUMMARIZE_LINK}>
        <SummarizeLinkInput />
      </CustomTabPanel>

      <CustomTabPanel value={selectedTab} index={TabValue.SUMMARIZE_FILE}>
        <SummarizeFileInput />
      </CustomTabPanel>

    </Box>
  );
};

export default PodcastSummarize;
