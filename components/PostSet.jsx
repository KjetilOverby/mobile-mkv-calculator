import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import Hylse from './hylse/Hylse';

import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  backBtn: {
    position: 'absolute',
  },
  postContainer: {
    marginTop: '-3rem',
  }
}));
const PostSet = (props) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.postContainer}>
      <Hylse post={props.post} />
    </div>
  );
};

export default PostSet;
