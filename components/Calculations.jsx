import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));

const Calculations = (props) => {

    //Start rings
  const startRings = props.data.startRings;
  {}
   const startRingSum = startRings
    .reduce((num, { input }) => Number(num) + Number(input), 0)
    //Raw input calculations
    const numberOfBlades = props.data.rawInput.length + 1
    const bladStammeSum = Number(numberOfBlades) * props.data.blades.bladStamme

    const rawInput = props.data.rawInput
    const rawInputSum = rawInput.reduce((num, { input }) => Number(num) + Number(input), 0)
    const numberOfRawInput = props.data.rawInput.length * 1.4
    const rawInputRings = Number(rawInputSum + Number(numberOfRawInput))
    const totalRawRing = (Number(rawInputRings) + Number(numberOfRawInput) + bladStammeSum)
    .toFixed(2);
    const totalRawRingDivided = totalRawRing / 2
    //End Rings
    const endRings = props.data.endRings
    const endRingSum = endRings.reduce((num, { input }) => Number(num) + Number(input), 0)
   

    //FirstLabel
    
    const firstLabel = 200 - Number(totalRawRingDivided - 1.4)
    const firstLabelMinusStartRings = (firstLabel - startRingSum).toFixed(2)

    //Second Label

    const secondLabel = 217.2 - Number(totalRawRingDivided - 1.4)
    const secondLabelMinusEndRings = (secondLabel - endRingSum).toFixed(2);
  const classes = useStyles();
  console.log(firstLabel);
  return <div>
       <h1>{firstLabel}</h1>
      <h1>{firstLabelMinusStartRings}</h1>
  </div>;
};

export default Calculations;
