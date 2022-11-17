import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Profile from '../pages/Profile';
import store from '../redux/store';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
