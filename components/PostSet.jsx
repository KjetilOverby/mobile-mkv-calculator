import React from 'react';
import { makeStyles, Button, Hidden, Grid } from '@material-ui/core';
import Hylse from './hylse/Hylse';
import ScreenRotationIcon from '@material-ui/icons/ScreenRotation';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import { useRouter } from 'next/router';
import Info from './Info';

import DeleteModal from '../components/modals/DeleteModal';





const useStyles = makeStyles((theme) => ({
  backBtn: {
   position: 'absolute',
   left: '5vw',
   bottom: '4vh'
  },
  postContainer: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      height: '40vh'
    },
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
  // const firstBladeValueTop = props.post.sagsnitt
  
  const deletePost = async () => {
    const postId = router.query.id;
    try {
      const deleted = await fetch(`${props.deleteUrl}/${postId}`, {
        method: 'DELETE',
      });
      router.push(props.pushUrl);
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <>
    
    <div className={classes.postContainer}>
      <Hylse post={props.post} />
      <Hidden smDown>
      <div className={classes.buttonContainer} container>
    
     <Link href='/'>
      <Button className={classes.backBtn} variant='contained'>Tilbake</Button>
      </Link>
    
       
      
      </div>
      </Hidden>
    
    </div>
    <Hidden only='sm'>
    <Info  post={props.post}/>
    
    <DeleteModal delete={deletePost} post={props.post}/>
    </Hidden>
    </>
  );
};

export default PostSet;

//firstBladeValueTop={firstBladeValueTop}