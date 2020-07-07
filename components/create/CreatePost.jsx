import React from 'react';
import { makeStyles, Button, TextField } from '@material-ui/core';
import Hylse from '../hylse/Hylse';
import HylseComponent from '../hylse/HylseComponent';
import Link from 'next/link';
import { useState } from 'react';
import FillRings from '../FillRings';
import RawRings from '../RawRings';
import { useEffect } from 'react';

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
}));
const CreatePost = () => {
  const classes = useStyles();

  const [startRingFormValue, setStartRingFormValue] = useState('');

  const [startRings, setStartRings] = useState([]);
  const [finalForm, setfinalForm] = useState([]);

  const [getNameStartRings, setGetNameStartRings] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    setStartRings([...startRings, startRingFormValue]);

    setfinalForm({ ...finalForm, [getNameStartRings]: [...startRingFormValue ]});
    setStartRingFormValue('');
  };
  const startRingsChange = (e) => {
    setGetNameStartRings(e.target.name);
    setStartRingFormValue([e.target.value]);
  };

  console.log(finalForm);

  return (
    <div>
      <Link href="/">
        <Button className={classes.backBtn} variant="outlined">
          Tilbake
        </Button>
      </Link>
      <form onSubmit={onSubmit}>
        <TextField
          name="startRings"
          placeholder="Utfylling foran"
          onChange={startRingsChange}
        />
        <TextField
          name="endRings"
          placeholder="Utfylling bak"
          onChange={startRingsChange}
        />

        <Button onClick={onSubmit}>Submit</Button>
      </form>

      <div className={classes.postContainer}>
        <HylseComponent />
        <div className={classes.ringContainer}></div>
      </div>
    </div>
  );
};

export default CreatePost;
