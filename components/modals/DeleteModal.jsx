import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    openDelete: {
        margin: '1rem'
    },
    deleteBtn: {
        color: 'red'
    }
}))

export default function AlertDialogSlide(props) {
    const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.openDelete}>
        Slett denne posten
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{props.post.header}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Er du sikker på at du vil slette denne posten? 
            <br/>
            Slettingen kan ikke angres
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Avbryt
          </Button>
          <Button onClick={props.delete} color="primary" className={classes.deleteBtn}>
            Slett
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
