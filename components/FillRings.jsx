import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  
    fillRing: {
     [theme.breakpoints.down('md')]: {
        height: '7rem',
        width: '2.6rem',
        background: 'linear-gradient(4deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        margin: '0 .2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        zIndex: 100,
        borderRadius: '4px',
        border: '1px solid gray',
        borderRadius: '4px',
        boxShadow: '10px 10px 30px black'
     },
     [theme.breakpoints.down('xs')]: {
        height: '4rem',
        width: '1.5rem',
        margin: '0 0.05rem',
     },
    },
    
    value: {
      [theme.breakpoints.down('md')]: {
        fontSize: '.8rem'
      },
      [theme.breakpoints.down('xs')]: {
       fontSize: '0.5rem',
       
      },
    }
}))
const FillRings = (props) => {
    
    
const classes = useStyles()
return (
<div className={classes.fillRingContainer}>
  <div className={classes.fillRing}>
      <Typography className={classes.value}>{props.fillRingVal}</Typography>
  </div>
 
</div>
)
}

export default FillRings