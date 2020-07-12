import React from 'react';
import {
  makeStyles,
  Button,
  TextField,
  jssPreset,
  Radio,
  FormControlLabel,
  RadioGroup,
  Grid,
  Typography,
} from '@material-ui/core';
import Hylse from '../hylse/Hylse';
import HylseComponent from '../hylse/HylseComponent';
import Link from 'next/link';
import { useState } from 'react';
import FillRings from '../FillRings';
import RawRings from '../RawRings';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Formik, FieldArray, Field } from 'formik';
import Calculations from '../Calculations';

const useStyles = makeStyles((theme) => ({
  postContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  ringContainer: {
    position: 'absolute',
    left: '25em',
    display: 'flex',
    flexDirection: 'row',
  },
  backBtn: {
    margin: '1rem',
  },
  inputContainer: {},
  radioLabelContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstBladeContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  blade: {
    display: 'flex',
    justifyContent: 'center',
    background: 'orange',
    position: 'absolute',
    width: '3px',
    

    boxShadow: '5px 10px 10px black',
    [theme.breakpoints.down('xl')]: {
    
      height: '38rem',
    },
    [theme.breakpoints.down('lg')]: {
      height: '30rem'
    },
    [theme.breakpoints.down('md')]: {
      height: '15rem',
      width: '2px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '20vh',
    },
  },
  bladeTop: {
    position: 'absolute',
    color: 'orangered',
    top: '-1.5rem',
    [theme.breakpoints.down('md')]: {
     
      fontSize: '.7rem',
      top: '-1rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '.4rem',
    },
  },
  bladeBottom: {
    position: 'absolute',
    color: 'orangered',
    bottom: '-1.5rem',
    [theme.breakpoints.down('md')]: {
     
      fontSize: '.7rem',
      bottom: '-1rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '.4rem',
    },
  },
}));
const CreatePost = () => {
  const classes = useStyles();

  //

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={classes.inputContainer}>
      <Link href="/">
        <Button className={classes.backBtn} variant="outlined">
          Tilbake
        </Button>
      </Link>
      <Formik
        initialValues={{
          startRings: [{ input: '10' }, {input: '20'}],
          rawInput: [{ input: '52.2', ring: '53.1'}, { input: '52.2', ring: '53.1'}],
          endRings: [{ input: '10' }, { input: '40' }],
          blades: { bladStamme: 2.8 },
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <div>
            <form onSubmit={handleSubmit}>
              <FieldArray name="blades">
                {(arrayHelpers) => (
                  <div>
                    <div>
                      <Grid container>
                        <Grid className={classes.radioLabelContainer} Container>
                          <Grid item>
                            <label>2.2</label>
                          </Grid>
                          <Grid item>
                            <Field
                              type="radio"
                              name="blades.bladStamme"
                              value="2.2"
                              as={Radio}
                            />
                          </Grid>
                        </Grid>
                        <Grid className={classes.radioLabelContainer} Container>
                          <Grid item>
                            <label>2.4</label>
                          </Grid>
                          <Grid item>
                            <Field
                              type="radio"
                              name="blades.bladStamme"
                              value="2.4"
                              as={Radio}
                            />
                          </Grid>
                        </Grid>
                        <Grid className={classes.radioLabelContainer} Container>
                          <Grid item>
                            <label>2.6</label>
                          </Grid>
                          <Grid item>
                            <Field
                              type="radio"
                              name="blades.bladStamme"
                              value="2.6"
                              as={Radio}
                            />
                          </Grid>
                        </Grid>
                        <Grid className={classes.radioLabelContainer} Container>
                          <Grid item>
                            <label>2.8</label>
                          </Grid>
                          <Grid item>
                            <Field
                              type="radio"
                              name="blades.bladStamme"
                              value="2.8"
                              as={Radio}
                            />
                          </Grid>
                        </Grid>
                        <Grid className={classes.radioLabelContainer} Container>
                          <Grid item>
                            <label>3.0</label>
                          </Grid>
                          <Grid item>
                            <Field
                              type="radio"
                              name="blades.bladStamme"
                              value="3.0"
                              as={Radio}
                            />
                          </Grid>
                        </Grid>
                        <Grid className={classes.radioLabelContainer} Container>
                          <Grid item>
                            <label>3.2</label>
                          </Grid>
                          <Grid item>
                            <Field
                              type="radio"
                              name="blades.bladStamme"
                              value="3.2"
                              as={Radio}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                )}
              </FieldArray>

              <FieldArray name="startRings">
                {(arrayHelpers) => (
                  <div>
                    <Button
                      onClick={() => arrayHelpers.push({input: ''})}
                      variant="contained"
                    >
                      StartRings
                    </Button>
                    {values.startRings.map((startRing, index) => {
                      return (
                        <div>
                          <Field name={`startRings.${index}.input`} />
                          <Button onClick={() => arrayHelpers.remove(index)}>
                            X
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </FieldArray>
              <FieldArray name="rawInput">
                {(arrayHelpers) => (
                  <div>
                    <Button
                      onClick={() => arrayHelpers.push({input: ''})}
                      variant="contained"
                    >
                      RawInput
                    </Button>
                    {values.rawInput.map((rawInput, index) => {
                      return (
                        <div>
                          <Field
                            placeholder="Råmål"
                            name={`rawInput.${index}.input`}
                          />
                          <Field
                            placeholder="Ring"
                            name={`rawInput.${index}.ring`}
                          />
                          <Field
                            placeholder="Skims2"
                            name={`rawInput.${index}.shims2`}
                          />
                          <Field
                            placeholder="Skims3"
                            name={`rawInput.${index}.shims3`}
                          />
                          <Button onClick={() => arrayHelpers.remove(index)}>
                            X
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </FieldArray>

              <FieldArray name="endRings">
                {(arrayHelpers) => (
                  <div>
                    <Button
                      onClick={() => arrayHelpers.push({input: ''})}
                      variant="contained"
                    >
                      EndRings
                    </Button>
                    {values.endRings.map((endRings, index) => {
                      return (
                        <div>
                          <Field name={`endRings.${index}.input`} />
                          <Button onClick={() => arrayHelpers.remove(index)}>
                            X
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </FieldArray>
              <div>
                <Button
                  disabled={isSubmitting}
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
              </div>

              {/*  <pre>{JSON.stringify(values, null, 2)}</pre> */}
            </form>

            <div className={classes.postContainer}>
            
              <HylseComponent />
              
              <div className={classes.ringContainer}>
                {values.startRings.map((startRing) =>
                  startRing != undefined ? (
                    <FillRings value={startRing.input} />
                  ) : (
                    ''
                  )
                )}
                <div className={classes.firstBladeContainer}>
                <div className={classes.blade}>
      <Typography className={classes.bladeTop}>{(Number(values.blades.bladStamme) + 1.4).toFixed(1)}</Typography>
        <Typography className={classes.bladeBottom}>{values.blades.bladStamme}</Typography>
      </div>
                {values.rawInput.map((rawIn) =>
                  rawIn != undefined ? (
                    
                    <RawRings
                      value={rawIn.input}
                      ringVal={rawIn.ring}
                      shimsVal2={rawIn.shims2}
                      shimsVal3={rawIn.shims3}
                      sagSnitt={values.blades.sagSnitt}
                      bladStamme={values.blades.bladStamme}
                    />
                  ) : (
                    ''
                  )
                )}
                </div>
                {values.endRings.map((endRing) =>
                  endRing != undefined ? (
                    <FillRings value={endRing.input} />
                  ) : (
                    ''
                  )
                )}
              </div>
            </div>

            <Calculations data={values} />
          </div>
        )}
       
      </Formik>
    </div>
  );
};

export default CreatePost;
