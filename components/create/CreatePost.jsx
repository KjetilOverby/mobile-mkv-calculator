import React from 'react';
import { makeStyles, Button, TextField } from '@material-ui/core';
import Hylse from '../hylse/Hylse';
import HylseComponent from '../hylse/HylseComponent';
import Link from 'next/link';
import { useState } from 'react';
import FillRings from '../FillRings';
import RawRings from '../RawRings';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Formik, FieldArray, Field } from 'formik';

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
          startRings: [{ input: '' }],
          rawInput: [{ input: '10', ring: '53.1', shims2: '12', skims3: '99' }],
          endRings: [{ input: '10' }],
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log(data);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <div>
            <form onSubmit={handleSubmit}>
              <FieldArray name="startRings">
                {(arrayHelpers) => (
                  <div>
                    <Button
                      onClick={() => arrayHelpers.push()}
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
                      onClick={() => arrayHelpers.push()}
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
                      onClick={() => arrayHelpers.push()}
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
                {values.rawInput.map((rawIn) =>
                  rawIn != undefined ? (
                    <RawRings
                      value={rawIn.input}
                      ringVal={rawIn.ring}
                      shimsVal2={rawIn.shims2}
                      shimsVal3={rawIn.shims3}
                    />
                  ) : (
                    ''
                  )
                )}
                {values.endRings.map((endRing) =>
                  endRing != undefined ? (
                    <FillRings value={endRing.input} />
                  ) : (
                    ''
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default CreatePost;
