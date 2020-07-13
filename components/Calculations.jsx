import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  labelContainer: {
    position: 'absolute',
    height: '30em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    left: '7em'
  },
  labelContainer2: {
    position: 'absolute',
    height: '30em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    left: '75em',
    [theme.breakpoints.down('lg')]: {
    left: '50em',
    },
  }
}));

const Calculations = (props) => {

    //Start rings
  const startRings = props.data.startRings;
  {}
   const startRingSum = startRings
    .reduce((num, { input }) => Number(num) + Number(input), 0)
    //Raw input calculations
    const numberOfBlades = props.data.rawInput.length
    const bladStammeSum = Number(numberOfBlades) * props.data.blades.bladStamme

    const rawInput = props.data.rawInput
    const rawInputSum = rawInput.reduce((num, { input }) => Number(num) + Number(input), 0)
    const numberOfRawInput = props.data.rawInput.length * 1.4
    const rawInputRings = Number(rawInputSum + Number(numberOfRawInput))
    const totalRawRing = (Number(rawInputRings) + bladStammeSum)
    .toFixed(2);
    const totalRawRingDivided = totalRawRing / 2
    //End Rings
    const endRings = props.data.endRings
    const endRingSum = endRings.reduce((num, { input }) => Number(num) + Number(input), 0)
   
    const firstSawBlade = props.data.blades.bladStamme / 2
    //FirstLabel
    
    const firstLabel = (200 - firstSawBlade - totalRawRingDivided).toFixed(2)
    const firstLabelMinusStartRings = (firstLabel - startRingSum).toFixed(2)

    //Second Label

    const secondLabel = (217.2 - firstSawBlade - totalRawRingDivided).toFixed(2)
    const secondLabelMinusEndRings = (secondLabel - endRingSum).toFixed(2);
  
    useEffect(() => {
     if(firstLabelMinusStartRings <= 0.05 && firstLabelMinusStartRings >= -0.05 && secondLabelMinusEndRings <= 0.05 && secondLabelMinusEndRings >= -0.05 && props.data.header) {
    
       props.correctLabels(false)
     } else {
       props.correctLabels(true)
     }
    }, [firstLabel, firstLabelMinusStartRings, secondLabelMinusEndRings, secondLabel, props.data.header])
  const classes = useStyles();
  return (
    <>
   <div className={classes.labelContainer}>
       <h1>{firstLabel}</h1>
      <h1>{firstLabelMinusStartRings}</h1>
  </div>
   <div className={classes.labelContainer2}>
       <h1>{secondLabel}</h1>
      <h1>{secondLabelMinusEndRings}</h1>
  </div>
  </>
  )
};

export default Calculations;
