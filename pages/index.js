import React, { useEffect } from 'react';
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

import ReactGA from 'react-ga';

export default function Index({ posts, user }) {
  useEffect(() => {
    ReactGA.initialize('UA-165295838-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>
      <PostSearch posts={posts} user={user} />
    </div>
  );
}

Index.getInitialProps = async () => {
  const res = await fetch(`${baseUrl}/api/createdPost/posts`);
  const data = await res.json();
  return { posts: data };
};
