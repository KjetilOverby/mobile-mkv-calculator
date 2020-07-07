import fetch from 'isomorphic-unfetch';

import baseUrl from '../../../utils/baseUrl';
import PostSet from '../../../components/PostSet';
import { Typography, makeStyles } from '@material-ui/core';
import Info from '../../../components/Info';

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'absolute',
    top: '1em',
    left: '2em',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '2rem',
    [theme.breakpoints.down('lg')]: {
      fontSize: '2.2rem'
    },
    color: '#694786',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
    },
  },
}));

const post_id = ({ post }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.header}>{post.type.name}</Typography>
      <PostSet post={post} />
      {/* <Info post={post} /> */}
    </div>
  );
};

post_id.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${baseUrl}/api/${id}`);
  const { data } = await res.json();
  return { post: data };
};

export default post_id;
