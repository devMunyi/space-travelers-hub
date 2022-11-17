import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducers from './reducers/rockets';
import missionsReducers from './reducers/missions';

export default configureStore(
  {
    reducer: {
      rockets: rocketsReducers,
      missions: missionsReducers,
    },
  },
  applyMiddleware(logger),
);
