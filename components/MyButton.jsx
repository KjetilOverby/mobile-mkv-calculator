import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
 
  firstContainer: {
      boxShadow: '10px 10px 25px rgba(0,0,0,.5)',
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
      },
  },
  secondContainer: {
      boxShadow: '-5px -5px 25px white',
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
        width: '90vw'
      },
  },
  header: {
      color: '#555',
      fontSize: '1.2rem',
      fontWeight: 'bold'
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