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
import HylseCreate from './HylseCreate';
import Link from 'next/link';
import { useState } from 'react';
import FillRingCreate from './FillRingCreate';
import RawRingCreate from './RawRingCreate';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Formik, FieldArray, Field } from 'formik';
import Calculations from '../Calculations';
import DeleteIcon from '@material-ui/icons/Delete';
import { useRouter } from 'next/router';
import { set } from 'mongoose';

const useStyles = makeStyles((theme) => ({
  postContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '70em',
    height: '40em',
    marginTop: '5em',
    [theme.breakpoints.down('lg')]: {
      width: '50em',
      marginLeft: '-5rem',
      marginTop: '-1rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '45em',
      marginLeft: '-12rem',
      marginTop: '4rem'
    },
  },
  ringContainer: {
    position: 'absolute',
    left: '15em',
    display: 'flex',
    flexDirection: 'row',
    
  },
  backBtn: {
    margin: '1rem',
  },
  formContainer: {
    padding: '1rem',
    width: '35em',
    margin: '-4rem 1rem',
    borderRadius: '5px',
    boxShadow: '5px 5px 30px rgba(0,0,0,.5)'
  },
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
    alignItems: 'center',
  },
  blade: {
    display: 'flex',
    justifyContent: 'center',
    background: 'orange',
    position: 'absolute',
    width: '3px',

    boxShadow: '5px 10px 10px black',
    [theme.breakpoints.down('xl')]: {
      height: '30rem',
    },
    [theme.breakpoints.down('lg')]: {
      height: '20rem',
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
    fontSize: '.8rem',
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
    fontSize: '.8rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '.7rem',
      bottom: '-1rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '.4rem',
    },
  },
  headerContainer: {
    height: '5em',
    width: '40em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 50%',
  },
  header: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'blue',
  },
  field: {
    width: '5em',
    marginRight: '1em',
  },
  deleteIcon: {
    color: 'indianred'
  },
  formSectionHeader: {
    marginBottom: '1rem',
    color: 'purple'
  }
}));
const CreatePost = (props) => {
  const classes = useStyles();
   const router = useRouter()

  const [correctLabels, setCorrectLabels] = useState(false)

  return (
    <div className={classes.inputContainer}>
   
      <Link href="/">
        <Button className={classes.backBtn} variant="outlined">
          Tilbake
        </Button>
      </Link>
      <Formik
        initialValues={{
          startRings: [],
          rawInput: [],
          endRings: [],
          blades: '',
          header: '',
        }}
        onSubmit={async(data, { setSubmitting }) => {
          setSubmitting(true);
          setSubmitting(false);
          console.log(data);
          const res = await fetch(props.url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        //body: BSON.serialize(form)
        body: JSON.stringify(data),
        // body: form
      });
      router.push('/')
        }}
      >
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <div>
            <div className={classes.headerContainer}>
              <Typography className={classes.header} variant="h4">
                {values.header}
              </Typography>
            </div>
            <Grid container>
            <Grid item>
            <div className={classes.formContainer}>
              <form onSubmit={handleSubmit}>
              <Typography className={classes.formSectionHeader} variant="h6">Post overskrift</Typography>
                <Field placeholder="Overskrift" type="text" name="header" as={TextField} variant='filled'/>
                <FieldArray name="blades">
                  {(arrayHelpers) => (
                    <div>
                      <div>
                        <hr />
                        <Typography className={classes.formSectionHeader} variant="h6">Velg sagblad</Typography>
                        <Grid container>
                          <Grid
                            className={classes.radioLabelContainer}
                            Container
                          >
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
                          <Grid
                            className={classes.radioLabelContainer}
                            Container
                          >
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
                          <Grid
                            className={classes.radioLabelContainer}
                            Container
                          >
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
                          <Grid
                            className={classes.radioLabelContainer}
                            Container
                          >
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
                          <Grid
                            className={classes.radioLabelContainer}
                            Container
                          >
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
                          <Grid
                            className={classes.radioLabelContainer}
                            Container
                          >
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
                        <hr />
                      </div>
                    </div>
                  )}
                </FieldArray>

                <FieldArray name="startRings">
                  {(arrayHelpers) => (
                    <div>
                    <Typography className={classes.formSectionHeader} variant="h6">Utfylling foran</Typography>
                      <Button
                        onClick={() => arrayHelpers.push({ input: '' })}
                        variant="contained"
                        size='small'
                        color='secondary'
                      >
                        Legg til ring
                      </Button>
                      {values.startRings.map((startRing, index) => {
                        return (
                          <div>
                            <Field className={classes.field} name={`startRings.${index}.input`} as={TextField} />
                            <Button onClick={() => arrayHelpers.remove(index)}>
                            <DeleteIcon className={classes.deleteIcon} />
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </FieldArray>
                <hr />
                <FieldArray name="rawInput">
                  {(arrayHelpers) => (
                    <div>
                    <Typography className={classes.formSectionHeader} variant="h6">Råmål</Typography>
                      <Button
                        onClick={() => arrayHelpers.push({ input: '' })}
                        variant="contained"
                        color='secondary'
                        size='small'
                      >
                        RawInput
                      </Button>
                      {values.rawInput.map((rawInput, index) => {
                        return (
                          <div>
                            <Field
                              className={classes.field}
                              placeholder="Råmål"
                              name={`rawInput.${index}.input`}
                              as={TextField}
                            />
                            <Field
                              className={classes.field}
                              placeholder="Ring"
                              name={`rawInput.${index}.ring`}
                              as={TextField}
                            />
                            <Field
                              className={classes.field}
                              placeholder="Skims2"
                              name={`rawInput.${index}.shims2`}
                              as={TextField}
                            />
                            <Field
                              className={classes.field}
                              placeholder="Skims3"
                              name={`rawInput.${index}.shims3`}
                              as={TextField}
                            />
                            <Button onClick={() => arrayHelpers.remove(index)}>
                            <DeleteIcon className={classes.deleteIcon} />
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </FieldArray>
                <hr />
                <FieldArray name="endRings">
                  {(arrayHelpers) => (
                    <div>
                    <Typography className={classes.formSectionHeader} variant="h6">Utfylling bak</Typography>
                      <Button
                       size='small'
                        onClick={() => arrayHelpers.push({ input: '' })}
                        variant="contained"
                        color='secondary'
                      >
                        legg til ring
                      </Button>
                      {values.endRings.map((endRings, index) => {
                        return (
                          <div>
                            <Field
                              className={classes.field}
                              name={`endRings.${index}.input`}
                              as={TextField}
                            />
                            <Button onClick={() => arrayHelpers.remove(index)}>
                              <DeleteIcon className={classes.deleteIcon} />
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </FieldArray>
                <hr />
                <div>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                   
                    onClick={handleSubmit}
                    disabled={correctLabels}
                  >
                    Lagre post
                  </Button>
                </div>

               
                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              </form>
              
            </div>
            </Grid>
            <Grid item>
            <div className={classes.postContainer}>
              <HylseCreate />

              <Calculations data={values} correctLabels={setCorrectLabels} />
              <div className={classes.ringContainer}>
                {values.startRings.map((startRing) =>
                  startRing != undefined ? (
                    <FillRingCreate value={startRing.input} />
                  ) : (
                    ''
                  )
                )}
                <div className={classes.firstBladeContainer}>
                  <div className={classes.blade}>
                    <Typography className={classes.bladeTop}>
                      {(Number(values.blades.bladStamme) + 1.4).toFixed(1)}
                    </Typography>
                    <Typography className={classes.bladeBottom}>
                      {values.blades.bladStamme}
                    </Typography>
                  </div>
                  {values.rawInput.map((rawIn) =>
                    rawIn != undefined ? (
                      <RawRingCreate
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
                    <FillRingCreate value={endRing.input} />
                  ) : (
                    ''
                  )
                )}
              </div>
            </div>
            </Grid>
            </Grid>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default CreatePost;