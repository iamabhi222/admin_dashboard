import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Inside from './insidebox';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
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
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '85vh', width: '88vw' }}
    >
      <Tabs
      class="modi"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
      
        <Tab label="General" {...a11yProps(0)} />
        <Tab label="Privacy" {...a11yProps(1)} />
        <Tab label="Features" {...a11yProps(2)} />
        <Tab label="Customization" {...a11yProps(3)} />
        <Tab label="Integration" {...a11yProps(4)} />
        <Tab label="Session Settings" {...a11yProps(5)} />
        <Tab label="My plans" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
         <HighlightOffIcon style={{position: 'absolute', right: '50px', color: '#676965'}}/>
      <HighlightOffIcon style={{position: 'absolute', right: '50px', color: '#676965'}}/>
        <Inside/>
        <Button style={{position: 'absolute', right: '80px'}} variant="contained">Save</Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
         <HighlightOffIcon style={{position: 'absolute', right: '50px', color: '#676965'}}/>
      <Inside/>
       <Button style={{position: 'absolute', right: '80px'}} variant="contained">Save</Button>
      </TabPanel>
      <TabPanel value={value} index={2}>
         <HighlightOffIcon style={{position: 'absolute', right: '50px', color: '#676965'}}/>
      <Inside/>
       <Button style={{position: 'absolute', right: '80px'}} variant="contained">Save</Button>
      </TabPanel>
      <TabPanel value={value} index={3}>
         <HighlightOffIcon style={{position: 'absolute', right: '50px', color: '#676965'}}/>
      <Inside/>
       <Button style={{position: 'absolute', right: '80px'}} variant="contained">Save</Button>
      </TabPanel>
      <TabPanel value={value} index={4}>
         <HighlightOffIcon style={{position: 'absolute', right: '50px', color: '#676965'}}/>
      <Inside/>
       <Button style={{position: 'absolute', right: '80px'}} variant="contained">Save</Button>

      </TabPanel>
      <TabPanel value={value} index={5}>
         <HighlightOffIcon style={{position: 'absolute', right: '50px', color: '#676965'}}/>
      <Inside/>
       <Button style={{position: 'absolute', right: '80px'}} variant="contained">Save</Button>
      </TabPanel>
      <TabPanel value={value} index={6}>
         <HighlightOffIcon style={{position: 'absolute', right: '50px', color: '#676965'}}/>
      <Inside/>
       <Button style={{position: 'absolute', right: '80px'}} variant="contained">Save</Button>
      </TabPanel>
    </Box>
  );
}
