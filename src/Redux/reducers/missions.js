import {
  FETCH_MISSIONS,
  BOOK_MISSION,
  CANCEL_MISSION,
} from "../mission/missions";

const initialState = [];

const missionsReducers = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case `${FETCH_MISSIONS}/fulfilled`:
      return payload;

    case `${BOOK_MISSION}`:
      return state.map((mission) => {
        if (mission.mission_id !== payload) return mission;
        return { ...mission, reserved: true };
      });

    case `${CANCEL_MISSION}`:
      return state.map((mission) => {
        if (mission.mission_id !== payload) return mission;
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

// export rockets reducer as default
export default missionsReducers;
