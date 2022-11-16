import { FETCH_ROCKETS, BOOK_ROCKET, CANCEL_ROCKET } from '../actions/rockets';

// set initial state
const initialState = [];

// rockets reducer
const rocketsReducers = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case `${FETCH_ROCKETS}/fulfilled`:
      return payload;

    case `${BOOK_ROCKET}`:
      return state.map((rocket) => {
        if (rocket.id !== payload) return rocket;
        return { ...rocket, reserved: true };
      });

    case `${CANCEL_ROCKET}`:
      return state.map((rocket) => {
        if (rocket.id !== payload) return rocket;
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

// export rockets reducer as default
export default rocketsReducers;
