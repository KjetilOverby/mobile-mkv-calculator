import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
 
  firstContainer: {
      boxShadow: '4px 4px 25px rgba(0,0,0,.5)',
      height: '4em',
      width: '30em',
      borderRadius: '30px',
      marginBottom: '2rem',
      transition: '.5s',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: 'inset 5px 5px 5px rgba(0,0,0,.5)',
      },
      [theme.breakpoints.down('xs')]: {
        width: '90vw',
        "&:hover": {
            boxShadow: '4px 4px 25px rgba(0,0,0,.5)',
        }
      },
  },
  secondContainer: {
      boxShadow: '-4px -4px 15px rgb(208, 247, 247)',
      height: '4em',
      width: '30em',
      borderRadius: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '2rem',
      transition: '.5s',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: 'inset -5px -5px 5px white',
      },
      [theme.breakpoints.down('xs')]: {
        width: '90vw',
        '&:hover': {
            boxShadow: '-4px -4px 15px rgb(208, 247, 247)',
          },
      },
  },
  header: {
      color: '#315975',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      textShadow: '5px 5px 10px rgba(0,0,0,.3)'
  }
}))
const MyButton = (props) => {
const classes = useStyles()
return (
<div className={classes.container}>
  <div className={classes.firstContainer}>
      <div className={classes.secondContainer}><Typography className={classes.header}>{props.header}</Typography></div>
  </div>
</div>
)
}

export default MyButton