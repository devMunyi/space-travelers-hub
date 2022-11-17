import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../pages/Rockets';

it('renders Component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
