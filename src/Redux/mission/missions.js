import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios';

// set action constants
export const FETCH_MISSIONS = "fetch_missions";
export const BOOK_MISSION = "book_mission";
export const CANCEL_MISSION = "cancel_mission";

// set api url
const url = "https://api.spacexdata.com/v3/missions";

export const fetchMissions = createAsyncThunk(FETCH_MISSIONS, async () => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
});

export const bookedMission = (id) => ({ type: BOOK_MISSION, payload: id });

export const cancelledMission = (id) => ({ type: CANCEL_MISSION, payload: id });
