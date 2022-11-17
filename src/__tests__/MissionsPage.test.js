import React from 'react';
// import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Missions from '../pages/Missions';

it('renders Component correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
