import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rawRingContainer: {
    position: 'relative',
  },
  rawDistanceRing: {
    margin: '0 .2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    zIndex: '100',
    border: '1px solid gray',
    borderRadius: '4px',
    boxShadow: '5px 5px 30px rgba(0,0,0,.3)',
    flexDirection: 'column',
    height: '7rem',
      width: '2.6rem',
      background:
        'linear-gradient(4deg, rgba(2,0,36,1) 0%, rgba(36,149,126,1) 35%, rgba(0,255,229,1) 100%)',
    [theme.breakpoints.down('md')]: {
      
    },
    [theme.breakpoints.down('xs')]: {
      height: '4rem',
      width: '1.5rem',
      margin: '0 .05rem',
    },
  },
  rawVal: {
    position: 'absolute',
    [theme.breakpoints.down('md')]: {
      fontSize: '.8rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.5rem',
    },
  },
  rawInput: {
    position: 'absolute',

    color: 'blue',
    [theme.breakpoints.down('md')]: {
      fontSize: '.8rem',
      bottom: '9em'
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
      bottom: '8em'
    },
  },
  ringVal: {
    position: 'absolute',
    [theme.breakpoints.down('md')]: {
      top: '7.5rem',
      color: 'blue',
      fontSize: '0.8rem',
      fontStyle: 'italic',
    },
    [theme.breakpoints.down('xs')]: {
      top: '4.5rem',
      fontSize: '.5rem',
    },
  },
  shimsVal: {
    position: 'absolute',
    [theme.breakpoints.down('md')]: {
      top:'8.7rem',
      color: 'blue',
      fontSize: '0.8rem',
      fontStyle: 'italic',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
      top: '5.2rem',
    },
  },
  shimsVal2: {
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      top: '10rem',
      color: 'blue',
      fontSize: '0.8rem',
      fontStyle: 'italic',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
      top: '6rem'
    },
  },
  shimsVal3: {
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      top:'11.3rem',
      color: 'blue',
      fontSize: '0.8rem',
      fontStyle: 'italic',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
      top: '6.8rem',
    },
  },
  blade: {
    display: 'flex',
    justifyContent: 'center',
    background: 'orange',
    height: '15rem',
    position: 'absolute',
    width: '2px',
    right: '0%',
    [theme.breakpoints.down('md')]: {
     /*  height: '15rem',
      width: '2px', */
      boxShadow: '5px 10px 10px black',
    },
    [theme.breakpoints.down('xs')]: {
      height: '20vh',
    },
  },
  bladeTop: {
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      color: 'orangered',
      fontSize: '.7rem',
      top: '-1rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '.4rem',
    },
  },
  bladeBottom: {
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      color: 'orangered',
      fontSize: '.7rem',
      bottom: '-1rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '.4rem',
    },
  },
}));
const RawRings = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.rawRingContainer}>
      <div className={classes.rawDistanceRing}>
        <Typography className={classes.rawInput}>{props.rawVal}</Typography>
        <Typography className={classes.rawVal}>
          {(props.rawVal + 1.4).toFixed(1)}
        </Typography>
        <Typography className={classes.ringVal}>{props.ringVal}</Typography>
        <Typography className={classes.shimsVal}>{props.shimVal}</Typography>
        <Typography className={classes.shimsVal2}>{props.shimsVal2}</Typography>
        <Typography className={classes.shimsVal3}>{props.shimsVal3}</Typography>
        <div className={classes.blade}>
          <Typography className={classes.bladeTop}>
            {props.postInfo.sagsnitt[0].toFixed(1)}
          </Typography>
          <Typography className={classes.bladeBottom}>
            {props.postInfo.bladeThickness}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RawRings;
