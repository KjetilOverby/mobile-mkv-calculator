import React, { useState } from 'react'
import { makeStyles, Typography, Input, TextField } from '@material-ui/core';
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
   postSearchContainer: {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       background: 'white'
   },
   postheader: {
       marginBottom: '.5rem',
       marginTop: '.5rem',
       background: 'dodgerblue',
       width: '90vw',
       padding: '1rem 0 1rem 1rem',
       fontSize: '1.2rem',
       fontWeight: 'bold',
       borderRadius: '5px',
       border: '1px solid black',
       color: '#99ccff'
   },
   textField: {
       margin: '3rem'
   }
}))
const PostSearch = ({posts}) => {
const classes = useStyles()

const [searchInput, setSearchInput] = useState('')

const getSearch = (e) => {
   setSearchInput(e.target.value)
} 

const search = posts.data.filter((post) => post.type.name.includes(searchInput))

return (
<div>

<TextField className={classes.textField} placeholder='Søk' onChange={getSearch}/>

   {search.map((post) => {
   
   
       return (
           
           <div className={classes.postSearchContainer}>
          
             <Link href={`/post_id/${post._id}`}>
               <Typography className={classes.postheader}>{post.type.name}</Typography>
               </Link>
           </div>
       )
   })}
</div>
)
}

export default PostSearch