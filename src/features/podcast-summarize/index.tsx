import { Link } from 'react-router-dom';
import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import CustomTabPanel from '../../components/custom-tab-panel';
import SummarizeLinkInput from './components/summarize-link';
import SummarizeFileInput from './components/summarize-file';
// import SummarizeFileInput from './components/summarize-file';

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
    <Box>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        sx={{ marginBottom: 7, backgroundColor: 'white' }}
      >
        <Tab label="Summarize Link" value={TabValue.SUMMARIZE_LINK} />
        <Tab label="Summarize File" value={TabValue.SUMMARIZE_FILE} />
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
