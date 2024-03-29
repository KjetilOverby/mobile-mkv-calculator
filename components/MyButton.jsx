import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ////////// Experimantal /////////
  firstContainer: {
    height: "4em",
    width: "30em",
    borderRadius: "10px",
    marginBottom: "2rem",
    cursor: "pointer",
    border: ` 2px solid ${theme.palette.text.main}`,
    transition: "background 0.3s, color 0.9s",
    background: `linear-gradient(120deg, ${theme.palette.button.main} 50%, ${theme.palette.text.main} 50%)`,
    backgroundSize: "220%",
    "&:hover": {
      backgroundPosition: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      background: theme.palette.background.main,
    },

    [theme.breakpoints.down("xs")]: {
      width: "90vw",
      "&:hover": {
        background: "none",
        backgroundPosition: "0",
      },
    },
  },
  secondContainer: {
    height: "4em",
    width: "30em",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2rem",
    transition: ".5s",
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
      "&:hover": {},
    },
  },
  header: {
    color: theme.palette.text.main,
    fontSize: "1.2rem",
    fontWeight: "bold",
    textShadow: "5px 5px 10px rgba(0,0,0,.3)",
    width: "inherit",
    height: "inherit",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: ".5s",
    "&:hover": {
      [theme.breakpoints.up("md")]: {
        color: theme.palette.background.main,
      },
    },
  },

  //////////// original ////////////

  // firstContainer: {
  //     boxShadow: '4px 4px 25px rgba(0,0,0,.5)',
  //     height: '4em',
  //     width: '30em',
  //     borderRadius: '30px',
  //     marginBottom: '2rem',
  //     transition: '.5s',
  //     cursor: 'pointer',
  //     '&:hover': {
  //       boxShadow: 'inset 5px 5px 5px rgba(0,0,0,.5)',
  //     },
  //     [theme.breakpoints.down('xs')]: {
  //       width: '90vw',
  //       "&:hover": {
  //           boxShadow: '4px 4px 25px rgba(0,0,0,.5)',
  //       }
  //     },
  // },
  // secondContainer: {
  //     boxShadow: '-4px -4px 15px rgb(208, 247, 247)',
  //     height: '4em',
  //     width: '30em',
  //     borderRadius: '30px',
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     marginBottom: '2rem',
  //     transition: '.5s',
  //     cursor: 'pointer',
  //     '&:hover': {
  //       boxShadow: 'inset -5px -5px 5px white',
  //     },
  //     [theme.breakpoints.down('xs')]: {
  //       width: '90vw',
  //       '&:hover': {
  //           boxShadow: '-4px -4px 15px rgb(208, 247, 247)',
  //         },
  //     },
  // },
  // header: {
  //     color: '#315975',
  //     fontSize: '1.2rem',
  //     fontWeight: 'bold',
  //     textShadow: '5px 5px 10px rgba(0,0,0,.3)'
  // }
}));
const MyButton = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.firstContainer}>
        <div className={classes.secondContainer}>
          <Typography className={classes.header}>{props.header}</Typography>
        </div>
      </div>
    </div>
  );
};

export default MyButton;
