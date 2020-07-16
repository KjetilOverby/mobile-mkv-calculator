import React from 'react'
import { makeStyles } from '@material-ui/core';
import baseUrl from '../../../utils/baseUrl';
import fetch from 'isomorphic-unfetch';


const useStyles = makeStyles(theme => ({

}))
const edit = () => {
const classes = useStyles()
return (
<div>
   edit page
</div>
)
}

export default edit

edit.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`${baseUrl}/api/createdPost/${id}`);
    const { data } = await res.json();
    return { post: data };
  };