import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import MissionIcon from '../../src/images/icons/mission-icon.png'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'secondary',
    top: 'auto',
    buttom: 0,
  },
}));

function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {''
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab label="Feed"/>
          <LinkTab label="Missões" href="/trash" />
          <LinkTab label="Escolhas" href="/spam" />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default NavTabs;
