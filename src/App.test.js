import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders announcement section', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/announcements/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders calendar section', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/calendar/i);
  expect(linkElement).toBeInTheDocument();
});

