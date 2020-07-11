import React from 'react';
import { makeStyles, TextField, Button } from '@material-ui/core';
import { Formik, FieldArray, Field } from 'formik';
const useStyles = makeStyles((theme) => ({}));
const Formik2 = () => {
  const classes = useStyles();

  return (
    <div>
      <Formik
        initialValues={{
             startRings: [{ input:  ''}] 
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
                      Add
                    </Button>
                    {values.startRings.map((pet, index) => {
                      return (
                          <div>
                            <Field name={`startRings.${index}.input`} />
                            <Button onClick={() => arrayHelpers.remove(index)}>
                              X
                            </Button>
                          </div>
                      )
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

              <pre>{JSON.stringify(values, null, 2)}</pre>
            </form>
      
            { console.log(values.startRings)}
            
            {values.startRings.map(startRing => (
              

             startRing != undefined
             ?

              <h1>{startRing.input}</h1> :
              ''
            ))}
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Formik2;
