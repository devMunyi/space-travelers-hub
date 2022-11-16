import { screen, render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';

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
