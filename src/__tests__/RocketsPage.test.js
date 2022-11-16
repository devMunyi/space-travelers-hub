import { screen, render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Rockets from '../pages/Rockets';
// import store from '../Redux/store';

// import { Provider } from 'react-redux';

const server = setupServer(
  rest.get('/url', (req, res, ctx) => res(ctx.json([{ id: 1, rocket_name: 'Falcon 1' }]))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Rockets Page', () => {
  it('should render rockets page correctly', () => {
    // ARRANGE
    render(<Rockets />);

    // ACT
    const text = screen.findByRole('heading');

    console.log('Texts Found => ', text);

    // ASSERT
    expect(text).toHaveTextContent('Falcon 1');
  });
});
