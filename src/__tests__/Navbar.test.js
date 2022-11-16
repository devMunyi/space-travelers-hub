import { screen, render } from '@testing-library/react';

import NavBar from '../components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

const MockedNavBar = () => (
  <Router>
    <NavBar />
  </Router>
);

describe('Navbar', () => {
  it('should render navbar correctly', () => {
    render(<MockedNavBar />);
    const rocketsText = screen.getByText(/rockets/i);

    expect(rocketsText).toMatchSnapshot();
  });
});
