import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  rawRingContainer: {
    position: 'relative'
  },
  rawDistanceRing: {
    [theme.breakpoints.down('md')]: {
        height: '7rem',
        width: '2.6rem',
        background: 'linear-gradient(4deg, rgba(2,0,36,1) 0%, rgba(36,149,126,1) 35%, rgba(0,255,229,1) 100%)',
        margin: '.2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '9.3em',
        color: 'white',
        zIndex: '100',
        border: '1px solid gray',
        borderRadius: '4px',
        boxShadow: '10px 10px 30px black'
     },
     [theme.breakpoints.down('xs')]: {
        height: '4rem',
        width: '1.5rem',
        margin: '.05rem',
        marginTop: '9.7em',
     },
    
  },
  rawVal: {
    [theme.breakpoints.down('md')]: {
      fontSize: '.8rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.5rem'
    },
   
  }, 
  rawInput: {
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      bottom: '32vh',
      color: 'red',
    },
    
    [theme.breakpoints.down('xs')]: {
       bottom: '11vh',
       fontSize: '.5rem'
    },
   
  
  },
  ringVal: {
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      bottom: '-6vh',
      color: 'red',
      fontSize: '0.8rem',
      fontStyle: 'italic'
    },
    [theme.breakpoints.down('xs')]: {
       bottom: '-3vh',
       fontSize: '.5rem'
    },
    
  },
  shimsVal: {
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      bottom: '-12vh',
      color: 'red',
      fontSize: '0.8rem',
      fontStyle: 'italic',
    },
    
    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
      bottom: '-5vh'
    },
  },
  blade: {
    [theme.breakpoints.down('md')]: {
      height: '15rem',
      width: '2px',
      background: 'orange',
      position: 'absolute',
      left: '2.9rem',
      boxShadow: '5px 10px 10px black'
    },
    [theme.breakpoints.down('xs')]: {
      height: '25vh',
      left: '1.5rem'
    },

  }
}))
const RawRings = (props) => {
 
const classes = useStyles()
return (
<div className={classes.rawRingContainer}>

  <div className={classes.rawDistanceRing}>
  <Typography className={classes.rawInput}>{props.rawVal}</Typography>
      <Typography className={classes.rawVal}>{(props.rawVal + 1.4).toFixed(1)}</Typography>
      <Typography className={classes.ringVal}>{props.ringVal}</Typography>
      <Typography className={classes.shimsVal} className={classes.shimsVal}>{props.shimVal}</Typography>
      <div className={classes.blade}></div>
  </div>
  
</div>
)
}

export default RawRings