import React, { useState } from 'react';
import {
  makeStyles,
  Typography,
  withMobileDialog,
  Grid,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    infoContainer: {
      padding: '3rem 3rem',
      background: 'linear-gradient(4deg, rgba(44,214,230,1) 0%, rgba(66,161,230,1) 34%, rgba(196,76,221,1) 100%)'
    },
  ok: {
    height: '1rem',
    width: '1rem',
    background: '#4cdd8e',
    borderRadius: '50%',
  },
  notOk: {
    height: '1rem',
    width: '1rem',
    background: 'red',
    borderRadius: '50%',
  },
  dotContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '1rem',
  },
  typography: {
      fontStyle: 'italic',
      color: '#430d4e',
      fontSize: '1rem'
  },
  span: {
      color: '#e6eb51',
  },
  infoHeaderLow: {
      margin: '1rem 0',
      fontStyle: 'italic',
      color: '#4e3861'
  },
  infoText: {
      fontStyle: 'italic',
      color: '#4e3861'
  },
  divider: {
      margin: '1rem 0'
  }
}));
const Info = ({ post }) => {
  const startRingsVal = 200;
  const endRingVal = 217.2;

  const startRings = post.startRings;
  const startRingSum = startRings
    .reduce((num, { input }) => Number(num) + Number(input), 0)
    .toFixed(2);

  // RAW INPUT CALCULATIONS

  const rawRings = post.rawInput;
  const rawInputSum = rawRings.reduce(
    (num, { input }) => Number(num) + Number(input),
    0
  );

  const numberOfRings = Number(rawRings.length + 1);
  const onlyNumberOfRings = rawRings.length * 1.4
  const rawRingSum = (rawInputSum + onlyNumberOfRings).toFixed(2)
  
  const bladeThick = Number(post.bladeThickness)
  const numberOfBlades = (numberOfRings)
  const bladeThicknesSum = (bladeThick * numberOfBlades).toFixed(2)
  const sagSnitt = post.sagsnitt;
  const singleBlade = post.sagsnitt[0];
  const sagSnittSum = sagSnitt.reduce((num1, num) => num1 + num);
  const allBlades = sagSnittSum + singleBlade;

  const rawInputCalc = (allBlades + rawInputSum) / 2 - 0.7;
  const finalCalcForStartRings = (startRingsVal - rawInputCalc).toFixed(2);
  const finalCalcForEndRings = (endRingVal - rawInputCalc).toFixed(2);

  const sumRawRingBlade = (Number(rawRingSum) + Number(bladeThicknesSum))
  const sumRawRingBladeDivided = (Number(rawRingSum) + Number(bladeThicknesSum)) / 2

  const toCenter = (Number(finalCalcForStartRings) + Number(sumRawRingBladeDivided)).toFixed(2)
  const fromCenter = (Number(finalCalcForEndRings) + Number(sumRawRingBladeDivided)).toFixed(2)

  //ENDRINGS

  const endRings = post.endRings;
  const endRingSum = endRings
    .reduce((num, { input }) => Number(num) + Number(input), 0)
    .toFixed(2);

 
 const totalEstimate = (Number(startRingSum) + Number(endRingSum) + Number(rawRingSum) + Number(bladeThicknesSum)).toFixed(2)

 
 
  const classes = useStyles();

  return (
    <div className={classes.infoContainer}>
       
       


      <Typography className={classes.typography} variant='h6'>Verdi foran: <span className={classes.span}>{finalCalcForStartRings}</span></Typography>
      
      <Grid container>
        <Grid item>
          <Typography className={classes.typography} variant='h6'>Status foran: </Typography>
        </Grid>
        <Grid item className={classes.dotContainer}>
          {startRingSum === finalCalcForStartRings ? (
            <div className={classes.ok}></div>
          ) : (
            <div className={classes.notOk}></div>
          )}
        </Grid>
      </Grid>
      <Typography className={classes.typography} variant='h6'>Verdi bak: <span className={classes.span}>{finalCalcForEndRings}</span></Typography>
      <Grid container>
        <Grid item>
          <Typography className={classes.typography} variant='h6'>Status bak: </Typography>
        </Grid>
        <Grid item className={classes.dotContainer}>
          {endRingSum === finalCalcForEndRings ? (
            <div className={classes.ok}></div>
          ) : (
            <div className={classes.notOk}></div>
          )}
        </Grid>
      </Grid>


      <Grid direction='column' container>
      <Grid item>
          <Typography className={classes.infoHeaderLow} variant='h5'>Foran</Typography>
          </Grid>
          <Grid item>
              <typography className={classes.infoText}>Sum ringer: <span className={classes.span}>{startRingSum}</span></typography>
          </Grid>
          <Grid item>
              <typography className={classes.infoText}>Difference: <span className={classes.span}>{(finalCalcForStartRings - startRingSum).toFixed(0)}</span></typography>
          </Grid>
          <Grid item>
              <Typography className={classes.infoHeaderLow} variant='h5'>Bak</Typography>
          </Grid>
          <Grid item>
              <typography className={classes.infoText}>Sum ringer: <span className={classes.span}>{endRingSum}</span></typography>
              <Grid item>
              <typography className={classes.infoText}>Difference: <span className={classes.span}>{(finalCalcForEndRings - endRingSum).toFixed(2)}</span></typography>
          </Grid>
          </Grid>
          <Grid item>
              <Typography className={classes.infoHeaderLow} variant='h5'>Senter og sagblad</Typography>
          </Grid>
          
          <Grid item>
              <Typography className={classes.infoText}>Sum senter: <span className={classes.span}>{rawRingSum}</span></Typography>
          </Grid>
          <Grid item>
              <Typography className={classes.infoText}>Sum sagbladstamme: <span className={classes.span}>{bladeThicknesSum}</span></Typography>
          </Grid>
          <Divider className={classes.divider}/>
          <Grid item>
              <Typography className={classes.infoText}>BladStamme og senter: <span className={classes.span}>{sumRawRingBlade}</span></Typography>
          </Grid>
          <Grid item>
              <Typography className={classes.infoText}>1/2: <span className={classes.span}>{sumRawRingBladeDivided}</span></Typography>
          </Grid>
          <Divider className={classes.divider}/>
          <Grid item>
              <Typography className={classes.infoText}>Til midten: <span className={classes.span}>{toCenter}</span></Typography>
          </Grid>
          <Grid item>
              <Typography className={classes.infoText}>Fra midten: <span className={classes.span}>{fromCenter}</span></Typography>
          </Grid>
          <Grid>
              <Typography className={classes.infoHeaderLow} variant='h5'>Totalt</Typography>
              <Typography className={classes.infoText}>Sum alt: <span className={classes.span}>{totalEstimate}</span></Typography>
          </Grid>
         
      </Grid>
    </div>
  );
};

export default Info;
