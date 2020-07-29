import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import { Button, Hidden } from '@material-ui/core';
import Link from 'next/link';
import DrawerComponent from './DrawerComponent';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    fontFamily: 'Faster One, cursive',
    fontSize: '1.6rem',
    color: '#33a3a3',
    textShadow: '5px 5px 20px rgb(151, 255, 201)',
    /* fontFamily: 'Yeseva One, cursive',
    fontFamily: 'Kumar One, cursive', */
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    marginRight: '2vw',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  appBar: {
    background:
      'linear-gradient(353deg, rgba(223,223,223,1) 0%, rgba(126,180,222,1) 35%, rgba(153,226,222,1) 100%)',
  },
  newBtn: {
    marginRight: '30vw',
    border: '1px solid white',
    color: 'white'
  },
}));

export default function SearchAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <Hidden mdUp>
        <DrawerComponent />
        </Hidden>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
           
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            MKV - POST~ARKIV
          </Typography>
         
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={props.getSearch}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Hidden mdDown>
            <Link href="/create">
              <Button
                className={classes.newBtn}
                variant="outlined"
              >
                lag ny post
              </Button>
            </Link>
          </Hidden>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}
