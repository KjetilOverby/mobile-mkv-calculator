import React from 'react';
import { makeStyles, Button, Hidden, Grid } from '@material-ui/core';
import Hylse from './hylse/Hylse';
import ScreenRotationIcon from '@material-ui/icons/ScreenRotation';
import Link from 'next/link'

import { useRouter } from 'next/router';
import Info from './Info';



const useStyles = makeStyles((theme) => ({
  backBtn: {
    position: 'absolute',
  },
  postContainer: {
    marginTop: '-3rem',
    position: 'relative',
  },
  rotationLogo: {
    position: 'absolute',
    top: '15rem',
    left: '3rem',
    fontSize: '2rem',
    color: 'green',
  },
  buttonContainer: {
    margin: '0 0 0 3rem',
    paddingBottom: '3rem'
  },
  btn: {
    marginRight: '1rem'
  }
}));
const PostSet = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const firstBladeValueTop = props.post.sagsnitt[0]
  
 
 
  return (
    <div className={classes.postContainer}>
      <Hylse post={props.post} />
      <Hidden smDown>
      <Grid className={classes.buttonContainer} container>
    
     <Link href='/'>
      <Button className={classes.btn} variant='outlined'>Tilbake</Button>
      </Link>
    
       
     
      </Grid>
      </Hidden>
     <Info firstBladeValueTop={firstBladeValueTop} post={props.post}/>
    </div>
  );
};

export default PostSet;
