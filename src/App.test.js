import { render, screen } from '@testing-library/react';
import App from './App';

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

test('renders the header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Trending this week/i);
  expect(headerElement).toBeInTheDocument();
});
