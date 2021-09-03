import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Cardleft from './cardleft'
import EventNoteIcon from '@mui/icons-material/EventNote';
import PeopleIcon from '@mui/icons-material/People';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import DraftsIcon from '@mui/icons-material/Drafts';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '90vh' }}
    >
      <Tabs
      className="box"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab style={{padding: '20px'}} label={<EventNoteIcon/>} {...a11yProps(0)} />
        <Tab style={{padding: '20px'}} label={<PeopleIcon/>} {...a11yProps(0)} />
        <Tab style={{padding: '20px'}} label={<ShowChartIcon/>} {...a11yProps(0)} />
        <Tab style={{padding: '20px'}} label={<DraftsIcon/>} {...a11yProps(0)} />
     
      </Tabs>
      <TabPanel  style={{backgroundColor: '#f7f2fb'}} value={value} index={0}>
      <Paper><Cardleft/></Paper>
      </TabPanel>
      <TabPanel  style={{backgroundColor: '#f7f2fb'}} value={value} index={1}>
      <Paper><Cardleft/></Paper>
      </TabPanel>
      <TabPanel  style={{backgroundColor: '#f7f2fb'}} value={value} index={2}>
      <Paper><Cardleft/></Paper>
      </TabPanel>
      <TabPanel  style={{backgroundColor: '#f7f2fb'}} value={value} index={3}>
      <Paper><Cardleft/></Paper>
      </TabPanel>
    </Box>
  );
}
