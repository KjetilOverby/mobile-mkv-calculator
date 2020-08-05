import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Typography, Grid, Button, Hidden } from '@material-ui/core';
import WidgetsIcon from '@material-ui/icons/Widgets';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100vw',
    alignItems: 'center',
    background: '#2390b5',
    justifyContent: 'space-between',
    padding: '0 2rem',
    height: '3em'
  },
  leftPart: {
    color: 'white',
    display: 'flex',
  },
  rightPart: {
    display: 'flex',
    width: '25vw',
    flexDirection: 'row',
    justifyContent: 'space-around',
    color: 'lightblue',
    [theme.breakpoints.down('lg')]: {
       width: '35vw'
    },
  },
}));

export default function SimpleBottomNavigation({ user }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  console.log(user);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
      <Hidden mdDown>
      <Grid item className={classes.leftPart}>
        <Button>
          {' '}
          <a
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '.8rem',
            }}
            href="https://mkv-calculator.ktl.now.sh"
            target="_blank"
          >
          
            <WidgetsIcon style={{ paddingTop: '.5rem' }} /> Classic Calculator
          </a>
        </Button>
      </Grid>
      <Grid item className={classes.rightPart}>
        {user && (
          <>
            <p>Innlogget som: {user.name ? user.name : 'Ikke innlogget'}</p>
            <img style={{height: '2em', borderRadius: '50%', marginTop:'.5rem'}} src={user.picture} alt=""/>

            <p>{user.updated_at}</p>
          </>
        )}
      </Grid>
      </Hidden>
      <Hidden mdUp>
          <Grid container justify="center">
              <Grid item>
             
                  <Typography style={{color: 'white'}}>© Copyright 2020</Typography>
              </Grid>
          </Grid>
      </Hidden>
    </BottomNavigation>
  );
}
