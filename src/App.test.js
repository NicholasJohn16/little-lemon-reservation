import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const headingElement = screen.getAllByText("Little Lemon");
  expect(headingElement[0]).toBeInTheDocument();
});
