import React, { useState } from 'react';
import {
  makeStyles,
  Typography,
  Input,
  TextField,
  Grid,
  Button,
  Hidden,
} from '@material-ui/core';
import Link from 'next/link';
import MyButton from './MyButton';
import Header from './Header';
//linear-gradient(353deg, rgba(223,223,223,1) 0%, rgba(126,180,222,1) 35%, rgba(153,226,222,1) 100%)
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    flexDirection: 'row',
    marginTop: '3.5rem'
  },
  postSearchContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '3rem',
    background:
      'radial-gradient(circle, rgba(174,238,211,1) 0%, rgba(148,187,233,1) 100%)',
    width: '50vw',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    alignItems: 'center',
    minHeight: '100vh',

    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      paddingLeft: '0',
      width: '100vw',
    },
  },
  /*  postheader: {
    marginBottom: '.5rem',
    marginTop: '.5rem',
    background:
      'linear-gradient(4deg, rgb(30, 0, 10) 0%, rgba(248,255,143,1) 50%, rgb(144, 91, 59) 100%)',
    width: '25vw',
    padding: '1rem 0 1rem 1rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderRadius: '10px',
    color: 'gray',
    boxShadow: '5px 5px 10px rgba(0,0,0,.5)',
    transition: '1s',
    '&:hover': {
      background: 'lightgray',
      cursor: 'pointer',
      boxShadow: '10px 10px 20px rgba(0,0,0,.5)',
    },
    [theme.breakpoints.down('lg')]: {
      width: '40vw',
    },
    [theme.breakpoints.down('md')]: {
      background:
        'linear-gradient(4deg, rgba(2,0,36,1) 0%, rgba(36,149,126,1) 35%, rgba(0,255,229,1) 100%)',
      color: '#abe3d8',
      width: '90vw',
      boxShadow: '10px 10px 10px rgba(0,0,0,.5)',
    },
  }, */

  searchContainer: {
    width: '50vw',
    padding: '2.5rem',
    flexDirection: 'column',
    background:
      'linear-gradient(353deg, rgba(223,223,223,1) 0%, rgba(126,180,222,1) 35%, rgba(153,226,222,1) 100%)',
      [theme.breakpoints.up('lg')]: {
        paddingLeft: '10vw',
       paddingTop: '15rem'
      },

    [theme.breakpoints.down('md')]: {
      width: '100vw',
      maxHeight: '50vh',
    },
    [theme.breakpoints.down('sm')]: {
      background:
        'linear-gradient(4deg, rgba(219,218,231,1) 0%, rgba(182,241,230,1) 35%, rgba(0,255,229,1) 100%)',
    },
  },
  textField: {
    marginRight: '3rem',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2rem',
      flexDirection: 'row',
    },
  },
  btn: {
    marginLeft: '5rem',
  },
  myButtonContainer: {
    width: '30em',
    display: 'flex',
    justifyContent: 'center',
    
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
  },
  info: {
    fontStyle: 'italic',
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.5rem',
      color: 'gray'
    },
  }
}));
const PostSearch = ({ posts, user }) => {
  const classes = useStyles();

  const [searchInput, setSearchInput] = useState('');

  const getSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const search = posts.data.filter((post) => post.header.includes(searchInput));

  return (
    <>
    <Header getSearch={getSearch} user={user}/>
    <Grid container className={classes.mainContainer}>
      <Grid container className={classes.searchContainer}>
      <Grid item>
        <Grid item>
      
        </Grid>
        <Grid item>
          <Typography className={classes.info}>Antall poster: {posts.data.length}</Typography>
          <Typography className={classes.info}>
          Søkeresultat: {!searchInput && ' Ingen søk'} {searchInput && search.length != 0 && <span style={{color: 'yellow'}}>{search.length}</span>} {search.length === 0 && <span style={{color: 'red'}}>Ingen treff</span>}
          </Typography>
        </Grid>
        </Grid>
        <Grid item>
      
        </Grid>
      </Grid>

      <Grid item>
        <div className={classes.postSearchContainer}>
          {search.map((post) => {
            return (
              <Link href={`/post_id/${post._id}`}>
                <div className={classes.myButtonContainer}>
                  <MyButton header={post.header} />
                </div>
              </Link>
            );
          })}
        </div>
      </Grid>
    </Grid>
    </>
  );
};

export default PostSearch;
