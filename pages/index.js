import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import baseUrl from '../utils/baseUrl';

import App from '../components/App';
import { Button } from '@material-ui/core';
import PostSearch from '../components/PostSearch';

export default function Index({posts, user}) {
  return (
   <div>
   
    <PostSearch posts={posts} user={user}/>
    
   </div>
  );
}

Index.getInitialProps = async () => {
  const res = await fetch(`${baseUrl}/api/createdPost/posts`);
  const data = await res.json();
  return { posts: data };
};
