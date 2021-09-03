import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';

export default function SwitchListSecondary() {
  const [checked, setChecked] = React.useState(['wifi']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      subheader={<ListSubheader>Audience Q&A</ListSubheader>}
    >
      <ListItem>
  
        <ListItemText id="switch-list-label-wifi"  >Moderation <br/><span style={{color: '#676965', fontSize: '12px'}}>Easily review all questions before they go live</span> </ListItemText>
        <Switch
          edge="end"
          onChange={handleToggle('wifi')}
          checked={checked.indexOf('wifi') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-wifi',
          }}
        />
      </ListItem>
      <ListItem>
       
        <ListItemText id="switch-list-label-wifi"  >Labels <br/><span style={{color: '#676965', fontSize: '12px'}}>Easily review all questions before they go live</span> </ListItemText>
        <Switch
          edge="end"
          onChange={handleToggle('bluetooth')}
          checked={checked.indexOf('bluetooth') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-bluetooth',
          }}
        />
      </ListItem>
      <ListItem>
       
          <ListItemText id="switch-list-label-wifi"  >Downvotes <br/><span style={{color: '#676965', fontSize: '12px'}}>Easily review all questions before they go live</span> </ListItemText>
        <Switch
          edge="end"
          onChange={handleToggle('bluetooth')}
          checked={checked.indexOf('bluetooth') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-bluetooth',
          }}
        />
      </ListItem>  <ListItem>
       
          <ListItemText id="switch-list-label-wifi"  >Replies <br/><span style={{color: '#676965', fontSize: '12px'}}>Easily review all questions before they go live</span> </ListItemText>
        <Switch
          edge="end"
          onChange={handleToggle('bluetooth')}
          checked={checked.indexOf('bluetooth') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-bluetooth',
          }}
        />
      </ListItem>  <ListItem>
       
          <ListItemText id="switch-list-label-wifi"  >Anomous questions <br/><span style={{color: '#676965', fontSize: '12px'}}>Easily review all questions before they go live</span> <br/> <div>  <Button style={{margin: '10px', marginLeft: '0'}} variant="outlined">160</Button>   <Button style={{margin: '10px'}} variant="outlined">240</Button>   <Button style={{margin: '10px'}} variant="contained">300</Button></div> </ListItemText>
        <Switch
          edge="end"
          onChange={handleToggle('bluetooth')}
          checked={checked.indexOf('bluetooth') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-bluetooth',
          }}
        />
      </ListItem>
      <ListItem>
       
          <ListItemText id="switch-list-label-wifi"  >Close questions <br/><span style={{color: '#676965', fontSize: '12px'}}>Easily review all questions before they go live</span> </ListItemText>
        <Switch
          edge="end"
          onChange={handleToggle('bluetooth')}
          checked={checked.indexOf('bluetooth') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-bluetooth',
          }}
        />
      </ListItem> 
    </List>
  );
}
