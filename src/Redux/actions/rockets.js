import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// set action constants
export const FETCH_ROCKETS = 'fetch_rockets';
export const BOOK_ROCKET = 'book_rocket';
export const CANCEL_ROCKET = 'cancel_rocket';

// set api url
const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
});

export const bookedRocket = (id) => ({ type: BOOK_ROCKET, payload: id });

export const cancelledRocket = (id) => ({ type: CANCEL_ROCKET, payload: id });
