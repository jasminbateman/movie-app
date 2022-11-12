import { render, screen } from '@testing-library/react';
import App from '../components/App.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Movie List/i);
  expect(linkElement).toBeInTheDocument();
});
