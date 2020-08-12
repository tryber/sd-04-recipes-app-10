import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Farewell, front-end', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/TRYBE/i);
  expect(linkElement).toBeInTheDocument();
});

test('Login contains input Field', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/EMail/i);
  expect(linkElement).toBeInTheDocument();
});

test('Login contains input Field', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Password/i);
  expect(linkElement).toBeInTheDocument();
});