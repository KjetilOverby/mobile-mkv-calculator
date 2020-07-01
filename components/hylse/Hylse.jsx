import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import FillRings from '../FillRings';
import RawRings from '../RawRings';

const useStyles = makeStyles((theme) => ({
  hylseContainer: {
    display: 'flex',
    maxHeight: '100vh',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
       marginBottom: '10rem',
       marginLeft: '5em'
    },
    [theme.breakpoints.down('xs')]: {
       marginLeft: '3.2em'
    },
  },
  hylse: {
    background: 'linear-gradient(rgb(200, 200, 200), rgb(66, 66, 66))',
    height: '10rem',
    width: '68rem',
    position: 'absolute',
    marginLeft: '-1.5em',
    display: 'flex',
    alignItems: 'center',
    zIndex: -2,
    boxShadow: '1px 1px 20px black',

    [theme.breakpoints.down('md')]: {
       width: '85vw',
       height: '5rem',
       left: '1em',
       top: '12.9rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '19rem',
      height: '3rem',
      left: '.3em',
      top: '64%'
    },
  },
  
  hylseKile: {
    height: '3.5rem',
    width: '67rem',
    background: 'linear-gradient(rgb(204, 204, 204), rgb(70, 69, 69))',
    boxShadow: '5px 5px 3px rgb(70, 69, 69)',
    borderBottomRightRadius: '10px',
    borderTopRightRadius: '10px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '14em',
    zIndex: 10,
    marginLeft: '-31em',
    borderTopLeftRadius: '40px',
    borderBottomLeftRadius: '40px',
    border: '1px solid gray',
    zIndex: -1,
    position: 'absolute',
    left: '35em',
    [theme.breakpoints.down('md')]: {
       width: '35em',
       height: '1.5rem',
       marginTop: '10.6rem',
       marginRight: '-3rem',
       left: '33em'
    },
    [theme.breakpoints.down('xs')]: {
       width: '16rem',
       height: '.8rem',
       marginTop: '10rem'
    },
  },
  hylseScrewHole: {
    height: '2em',
    width: '2em',
    background: '#2f2f2f',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      height: '1rem',
      width: '1rem'
    },
    [theme.breakpoints.down('xs')]: {
       height: '.5rem',
       width: '.5rem'
    },
  },
  screwHead1: {
    height: '1.7em',
    width: '1.7em',
    background: '#5b5b5b',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      height: '0.7rem'
    },
    [theme.breakpoints.down('xs')]: {
      height: '0.5rem'
    },
  },
  screwHead2: {
    height: '1em',
    width: '1em',
    background: '#2f2f2f',
    borderRadius: '50%',
    boxShadow: 'inset 1px 1px 6px white',
    [theme.breakpoints.down('xs')]: {
       height: '.5em',
       width: '.5em'
    },
  },
  hylseStart: {
    height: '14rem',
    width: '4rem',
    background: 'linear-gradient(rgb(184, 184, 184), rgb(56, 56, 56))',
    borderRadius: '5px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '-4rem',
    boxShadow: '10px 10px 30px black',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid gray',
    [theme.breakpoints.down('md')]: {
      height: '7rem',
      width: '3rem',
      left: '-3rem'

    },
    [theme.breakpoints.down('xs')]: {
       width: '1.6rem',
       height: '4rem',
       left: '-1.3em'
    },
  },
  // kileSpor: {
  //   height: '4.5em',
  //   width: '5em',
  //   background: 'rgb(56, 56, 56)',
  //   marginLeft: '2em',
  //   borderTopLeftRadius: '50%',
  //   borderBottomLeftRadius: '50%',
  //   boxShadow: 'inset 5px 4px 3px black',
  //   [theme.breakpoints.down('md')]: {
  //     height: '2rem'
  //   },
  // },
  hylseEnd: {
    height: '10rem',
    width: '5rem',
    background: 'linear-gradient(rgb(175, 175, 175), rgb(85, 85, 85))',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '-2rem',
    display: 'flex',
    alignItems: 'center',
    borderBottomRightRadius: '5px',
    borderTopRightRadius: '5px',
    overflow: 'hidden',
    
    [theme.breakpoints.down('md')]: {
      height: '5rem',
      width: '3rem'
    },
    [theme.breakpoints.down('xs')]: {
       height: '2.9rem',
       
    },
  },
  gang: {
    height: '10rem',
    width: '0.1em',
    background: 'rgb(189, 188, 188)',
    margin: '0 0.1rem',
    [theme.breakpoints.down('md')]: {
       height: '2rem',
    },
  },
  "&last-child": {
      height: '9.7em',
      alignItems: 'center'
  },
  kileSporGangs: {
      height: '3.6rem',
      width: '3rem',
      background: 'rgb(85, 85, 85)',
      position: 'absolute',
      borderTopRightRadius: '50px',
      borderBottomRightRadius: '50px',
      marginLeft: '-.5em',
      boxShadow: 'inset 1px 9px 3px black',
      [theme.breakpoints.down('md')]: {
        width: '2rem',
        height: '2rem'    
       },
       [theme.breakpoints.down('xs')]: {
         width: '1.5rem',
         height: '1rem'
       },
  },
  blade: {
    [theme.breakpoints.down('md')]: {
      height: '15rem',
      width: '2px',
      background: 'orange',
      marginTop: '8rem',
      boxShadow: '5px 10px 10px black'
    },
    [theme.breakpoints.down('xs')]: {
      height: '25vh',
      marginTop: '8.5rem'
    },

  }
}));
const Hylse = (props) => {

  
  
 
  
  const classes = useStyles();
  return (
    <div className={classes.hylseContainer}>
      {props.post.startRings.map((ring) => {
        return (
          <div>
            <FillRings fillRingVal={ring.input}/>
          </div>
        )
      })}
      <div className={classes.blade}></div>
      {props.post.rawInput.map((rawIn) => {
        return (
          <div>
            <RawRings rawVal={rawIn.input} ringVal={rawIn.ring} shimVal={rawIn.shims}/>
          </div>
        )
      })}

      {props.post.endRings.map((ring) => {
        return (
          <div>
            <FillRings fillRingVal={ring.input}/>
          </div>
        )
      })}
    {/*   <div className={classes.hylseKile}>
        <div className={classes.hylseScrewHole}>
          <div className={classes.screwHead1}>
            <div className={classes.screwHead2}></div>
          </div>
        </div>
        <div className={classes.hylseScrewHole}>
          <div className={classes.screwHead1}>
            <div className={classes.screwHead2}></div>
          </div>
        </div>
        <div className={classes.hylseScrewHole}>
          <div className={classes.screwHead1}>
            <div className={classes.screwHead2}></div>
          </div>
        </div>
      </div> */}
      <div className={classes.hylse}>
        <div className={classes.hylseLightReflection}></div>

        <div className={classes.hylseStart}>
          <div className={classes.kileSpor}></div>
        </div>
        <div className={classes.hylseEnd}>
        <div className={classes.kileSporGangs}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
        </div>
      </div>
    </div>
  );
};

export default Hylse;
