import fetch from 'isomorphic-unfetch';

import baseUrl from '../../../utils/baseUrl';
import PostSet from '../../../components/PostSet';
import { Typography, makeStyles } from '@material-ui/core';
import Info from '../../../components/Info';



//https://images.unsplash.com/photo-1594480464691-7d223cab32b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2667&q=80
//https://images.unsplash.com/photo-1469735139965-2d27590468a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80

const useStyles = makeStyles((theme) => ({
  container: {
    background: 'url("https://images.unsplash.com/photo-1520531158340-44015069e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4076&q=80")',
    position: 'relative',
    backgroundPosition: '50%',
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    
    [theme.breakpoints.down('sm')]: {
     background: 'white'
    },
    [theme.breakpoints.down('xs')]: {
      
      height: '40vh',
    },
  },  
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
    <div className={classes.container}>
    
      <Typography className={classes.header}>{post.header}</Typography>
      
      <PostSet post={post} deleteUrl={`${baseUrl}/api/createdPost`} pushUrl='/'/>
      
    </div>
  );
};

post_id.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${baseUrl}/api/createdPost/${id}`);
  const { data } = await res.json();
  return { post: data };
};

export default post_id;
