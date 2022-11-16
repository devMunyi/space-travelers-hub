import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducers from './reducers/rockets';

export default configureStore(
  {
    reducer: {
      rockets: rocketsReducers,
    },
  },
  applyMiddleware(logger)
);
