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
        boxShadow: '5px 5px 30px rgba(0,0,0,.3)'
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
      color: 'blue',
      fontSize: '.8rem'
    },
    
    [theme.breakpoints.down('xs')]: {
       bottom: '10vh',
       fontSize: '.5rem'
    },
   
  
  },
  ringVal: {
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      bottom: '-6vh',
      color: 'blue',
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
      color: 'blue',
      fontSize: '0.8rem',
      fontStyle: 'italic',
    },
    
    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
      bottom: '-5vh'
    },
  },
  shimsVal2: {
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      bottom: '-17vh',
      color: 'blue',
      fontSize: '0.8rem',
      fontStyle: 'italic',
    },
    
    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
      bottom: '-7vh'
    },
  },
  shimsVal3: {
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      bottom: '-22vh',
      color: 'blue',
      fontSize: '0.8rem',
      fontStyle: 'italic',
    },
    
    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
      bottom: '-9vh'
    },
  },
  blade: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      height: '15rem',
      width: '2px',
      background: 'orange',
      position: 'absolute',
      left: '2.9rem',
      boxShadow: '5px 10px 10px black'
    },
    [theme.breakpoints.down('xs')]: {
      height: '20vh',
      left: '1.5rem'
    },

  },
  bladeTop: {
    [theme.breakpoints.down('md')]: {
      position: "absolute",
      color: 'orangered',
      fontSize: '.7rem',
      top: '-1rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '.4rem'
   },
  },
  bladeBottom: {
    [theme.breakpoints.down('md')]: {
      position: "absolute",
      color: 'orangered',
      fontSize: '.7rem',
      bottom: '-1rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '.4rem'
   },
  }
}))
const RawRings = (props) => {
 console.log(props);
 
const classes = useStyles()
return (
<div className={classes.rawRingContainer}>

  <div className={classes.rawDistanceRing}>
  <Typography className={classes.rawInput}>{props.rawVal}</Typography>
      <Typography className={classes.rawVal}>{(props.rawVal + 1.4).toFixed(1)}</Typography>
      <Typography className={classes.ringVal}>{props.ringVal}</Typography>
      <Typography className={classes.shimsVal}>{props.shimVal}</Typography>
      <Typography className={classes.shimsVal2}>{props.shimsVal2}</Typography>
      <Typography className={classes.shimsVal3}>{props.shimsVal3}</Typography>
      <div className={classes.blade}>
        <Typography className={classes.bladeTop}>{props.postInfo.sagsnitt[0].toFixed(1)}</Typography>
        <Typography className={classes.bladeBottom}>{props.postInfo.bladeThickness}</Typography>
      </div>
  </div>
  
</div>
)
}

export default RawRings