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
  console.log(props.user);
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
   {/* My account */}
    {props.user !== undefined &&
      props.user.sub === 'google-oauth2|106500081074791056792' &&
      
      <DeleteModal delete={deletePost} post={props.post} user={props.user}/>
    }
    {/* work account */}
    {props.user !== undefined &&
      props.user.sub === 'auth0|5f27b78668033f003d618d38' &&
      <DeleteModal delete={deletePost} post={props.post} user={props.user}/>
      }

      {/* work account google auth */}
    {props.user !== undefined &&
      props.user.sub === 'google-oauth2|101843312488184148257' &&
      <DeleteModal delete={deletePost} post={props.post} user={props.user}/>
      }
    
    </Hidden>
    </>
  );
};

export default PostSet;

//firstBladeValueTop={firstBladeValueTop}