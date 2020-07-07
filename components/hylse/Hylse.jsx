import React from 'react';
import { makeStyles, Grid, Typography, Hidden } from '@material-ui/core';
import FillRings from '../FillRings';
import RawRings from '../RawRings';

const useStyles = makeStyles((theme) => ({
  hylseContainer: {
    display: 'flex',
    height: '50vh',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10rem 0',
    [theme.breakpoints.down('xl')]: {
      marginTop: '20rem',
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: '15em',
    },
    [theme.breakpoints.down('md')]: {
      margin: '5rem 0 0 5rem'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '10rem 0 0rem 0rem'
    },
    [theme.breakpoints.down('xs')]: {
       margin: '3rem 0 0 0rem'
    },
  },
  ringContainer: {
     width: '100%',
     display: 'flex',
     height: '20em',
     position: 'absolute',
     margin: '0 0 0 4.5em',
     zIndex: 100, 
     alignItems: 'center',
    
     width: '80vw',
     [theme.breakpoints.down('xl')]: {
      marginLeft: '5.5rem'
     },
     [theme.breakpoints.down('lg')]: {
      marginLeft: '4.5rem'
     },
    
     [theme.breakpoints.down('md')]: {
      margin: '0 0 0 3.5em',
     },
     [theme.breakpoints.down('sm')]: {
      
     },
        [theme.breakpoints.down('xs')]: {
       margin: '0 0 0 1.7rem'
     },
  },
  hylse: {
    background: 'linear-gradient(rgb(200, 200, 200), rgb(66, 66, 66))',
    height: '10rem',
    width: '85rem',
    display: 'flex',
    alignItems: 'center',
    zIndex: -2,
    boxShadow: '1px 1px 20px black',
    [theme.breakpoints.down('xl')]: {
     width: '88rem'
    },
    [theme.breakpoints.down('lg')]: {
      width: '71rem',
      height: '9rem'
    },

    [theme.breakpoints.down('md')]: {
       width: '68vw',
       height: '5rem',
    },
    [theme.breakpoints.down('sm')]: {
       width: '92vw'
    },
    [theme.breakpoints.down('xs')]: {
      width: '21.5rem',
      height: '3rem',
    },
  },
  
  hylseKile: {
    height: '3.5rem',
    width: '80rem',
    background: 'linear-gradient(rgb(204, 204, 204), rgb(70, 69, 69))',
    boxShadow: 'inset 4px 1px 3px rgb(70, 69, 69)',
    borderBottomRightRadius: '10px',
    borderTopRightRadius: '10px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    zIndex: 10,
    borderTopLeftRadius: '40px',
    borderBottomLeftRadius: '40px',
    border: '1px solid gray',
    zIndex: 1,
    [theme.breakpoints.down('xl')]: {
      width: '90rem',
      marginLeft: '-2rem'
    },
    [theme.breakpoints.down('lg')]: {
      width: '67rem',
      height: '2.5rem'
    },
    [theme.breakpoints.down('md')]: {
       width: '86.2vw',
       height: '1.5rem',
       marginLeft: '-1.5rem'
    },
    [theme.breakpoints.down('xs')]: {
       width: '19.3rem',
       height: '.8rem',
       marginLeft: '-1rem'
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
    background: 'linear-gradient(rgb(184, 184, 184), rgb(56, 56, 56))',
    borderRadius: '5px',
    boxShadow: '10px 10px 30px black',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid gray',
    width: '6rem',
    [theme.breakpoints.down('lg')]: {
     height: '12rem',
     width: '4.5rem',

    
    },
    [theme.breakpoints.down('md')]: {
      height: '7rem',
      width: '3rem',

    },
    [theme.breakpoints.down('xs')]: {
       width: '1.6rem',
       height: '4rem',
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
    right: '-2rem',
    display: 'flex',
    alignItems: 'center',
    borderBottomRightRadius: '5px',
    borderTopRightRadius: '5px',
    overflow: 'hidden',
    [theme.breakpoints.down('lg')]: {
     height: '9rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '5rem',
      width: '3rem'
    },
    [theme.breakpoints.down('xs')]: {
       height: '2.9rem',
       width: '2rem'
       
    },
  },
  gang: {
    height: '10rem',
    width: '0.1em',
    background: 'gray',
    margin: '0 0.1rem',
    [theme.breakpoints.down('lg')]: {
    height: '12rem'
    },
    [theme.breakpoints.down('md')]: {
       height: '10rem',
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
      [theme.breakpoints.down('lg')]: {
       height: '2.5rem',
       width: '2rem'
      },
      [theme.breakpoints.down('md')]: {
        width: '1.5rem',
        height: '1.5rem'    
       },
       [theme.breakpoints.down('xs')]: {
         width: '1.2rem',
         height: '.8rem'
       },
  },
  blade: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    background: 'orange',
    
    width: '3px',
    zIndex: 200,
    height: '30rem',
    boxShadow: '5px 10px 10px black',
    [theme.breakpoints.down('xl')]: {
      height: '38rem',
    },
    [theme.breakpoints.down('lg')]: {
      height: '30rem'
    },
    [theme.breakpoints.down('md')]: {
      width: '2px',
      height: '15rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '20vh',
      width: '2px',
    },

  },
  bladeTop: {
    color: 'orangered',
    position: "absolute",
    top: '-1.5rem',
    [theme.breakpoints.down('md')]: {
      
      
      fontSize: '.7rem',
      top: '-1rem'
    },
    [theme.breakpoints.down('xs')]: {
       fontSize: '.4rem'
    },
    
  },
  bladeBottom: {
    position: "absolute",
      color: 'orangered',
      bottom: '-1.5rem',
    [theme.breakpoints.down('md')]: {
      
      fontSize: '.7rem',
      bottom: '-1rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '.4rem'
   },
  },
  content: {
    color: 'transparent'
  }
}));
const Hylse = (props) => {

  
 
  const firstBladeValueTop = props.post.sagsnitt[0].toFixed(1);
 
  
  const classes = useStyles();
  return (
    <>
    <div className={classes.hylseContainer}>
  
      
     
      
      <div className={classes.hylse}>
      <div className={classes.ringContainer}>
      {props.post.startRings.map((ring) => {
        return (
          <div>
            <FillRings fillRingVal={ring.input}/>
          </div>
        )
      })}

      <div className={classes.blade}>
       <span className={classes.content}>Content</span>
      <Typography className={classes.bladeTop}>{firstBladeValueTop}</Typography>
        <Typography className={classes.bladeBottom}>{props.post.bladeThickness}</Typography>
      </div>
      
      {props.post.rawInput.map((rawIn) => {
        return (
          <div>
            <RawRings
             rawVal={rawIn.input} 
             ringVal={rawIn.ring} 
             shimVal={rawIn.shims}
             shimsVal2={rawIn.shims2}
             shimsVal3={rawIn.shims3}
             postInfo={props.post}
             
             />
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
      </div>
      
        <div className={classes.hylseStart}>
          <div className={classes.kileSpor}></div>
        </div>
        <div className={classes.hylseKile}>
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
            <Hidden smDown>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            <div className={classes.gang}></div>
            </Hidden>
           
        </div>
      
    </div>
    </div>
    </>
  );
};

export default Hylse;
