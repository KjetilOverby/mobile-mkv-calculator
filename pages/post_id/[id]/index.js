import fetch from 'isomorphic-unfetch';

import baseUrl from '../../../utils/baseUrl';
import PostSet from '../../../components/PostSet';
import { Typography } from '@material-ui/core';
import Info from '../../../components/Info';


const post_id = ({post}) => {
   
    return (
        <div> 
        <Typography style={{
            position: 'absolute',
            fontSize: '1.2rem',
            top: '1em',
            left: '2em',
            fontStyle: 'italic',
            fontWeight: 'bold',
            color: '#694786'
            }}>{post.type.name}</Typography> 
           <PostSet post={post}/>
           <Info post={post}/>
        </div>
    )
}

post_id.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`${baseUrl}/api/${id}`);
    const { data } = await res.json();
    return { post: data };
  };

export default post_id