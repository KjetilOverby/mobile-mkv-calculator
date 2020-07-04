import React from 'react';
import { makeStyles, Button, Hidden } from '@material-ui/core';
import Hylse from './hylse/Hylse';
import ScreenRotationIcon from '@material-ui/icons/ScreenRotation';

import { useRouter } from 'next/router';

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
    color: 'green'
  }
}));
const PostSet = (props) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.postContainer}>
      <Hylse post={props.post} />
      <Hidden smUp>
      <ScreenRotationIcon className={classes.rotationLogo} />
      </Hidden>
      
    </div>
  );
};

export default PostSet;
