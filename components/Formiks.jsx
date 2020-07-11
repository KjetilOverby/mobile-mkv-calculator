import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  Typography,
  TextField,
  Button,
  Checkbox,
  Radio,
  Select,
  MenuItem,
} from '@material-ui/core';

import { Formik, Field, Form, FieldArray } from 'formik';

const useStyles = makeStyles((theme) => ({
  typo: {
    marginTop: '20rem',
    transform: 'rotate(10deg)',
  },
  img: {
    height: '40rem',
  },
}));
const Formiks = (values) => {
  useEffect(() => {
    console.log('====================================');
    console.log(values);
    console.log('====================================');
  }, [values]);
  const classes = useStyles();
  return (
    <div>
      <Formik
        initialValues={{
          firstName: [],
          lastName: '',
          isTall: false,
          cookies: [],
          pets: ['cat'],
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log('submit', data);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <div>
            <Form>
              <Field
                placeholder="first name"
                name="firstName"
                type="input"
                as={TextField}
              />
              <div>
                <Field
                  placeholder="last name"
                  name="lastName"
                  type="input"
                  as={TextField}
                />
                <div>
                  <Field name="isTall" type="checkbox" as={Checkbox} />
                  <div>Cookies</div>
                  <Field
                    value="Chocolate chip"
                    name="cookies"
                    type="checkbox"
                    as={Checkbox}
                  />
                  <Field
                    value="Snicker doodle"
                    name="cookies"
                    type="checkbox"
                    as={Checkbox}
                  />
                  <Field
                    value="Sugar"
                    name="cookies"
                    type="checkbox"
                    as={Checkbox}
                  />
                </div>
                <div>
                  <div>Yoghurt</div>
                  <Field type="radio" as={Radio} />
                </div>
              </div>
              <div>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button>
              </div>
              <pre>{JSON.stringify(values, null, 2)}</pre>

              <FieldArray name="pets">
                {(arrayHelpers) => (
                  <div>
                    <Button
                      onClick={() => arrayHelpers.push()}
                      variant="contained"
                    >
                      Add
                    </Button>
                    {values.pets.map((pet, index) => {
                      return (
                          <div>
                            <Field name={`pets.${index}.name`} />
                            <Button onClick={() => arrayHelpers.remove(index)}>
                              X
                            </Button>
                          </div>
                      )
                    })}
                  </div>
                )}
              </FieldArray>
            </Form>

            {values.isTall && (
              <div>
                <Typography variant="h4">The Model</Typography>
                <img
                  className={classes.img}
                  //src="https://i.mdel.net/oftheminute/images/2019/07/Jill-06.jpg"
                  src="https://1.bp.blogspot.com/-fudOmgryZeg/W1BEm2dK0TI/AAAAAAAAhxg/5jbSzn40dqE5cEQVYf5WYAEW_7Gmi9wmQCLcBGAs/s1600/ileana%2Bhot%2Bbutt%2Bsouth%2Bactress%2Bfakes.jpg"
                  alt=""
                />
              </div>
            )}

            <div>
              {/* {values.pets.map((pet) => {
              return(
                <div>
                  <>{pet}</>
                </div>
              )
            })} */}

              {/* {values.pets.map((pet) => {
                console.log('====================================');
                console.log(pet);
                console.log('====================================');
              })} */}
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Formiks;
