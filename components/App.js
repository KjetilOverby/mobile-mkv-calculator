import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appContainer: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  ringComponentContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100vw',
    justifyContent: 'center',
    position: 'relative',

    margin: '100px 0',
  },
}));
const App = ({ posts }) => {
  const classes = useStyles();

  return (
    <div className={classes.appContainer}>
      <div className={classes.ringComponentContainer}></div>
    </div>
  );
};

export default App;
