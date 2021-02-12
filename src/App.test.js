import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Paper & Ink brand logo', () => {
  const { getByText } = render(<App />);
  const brandText = getByText(/Paper & Ink/i);
  expect(brandText).toBeInTheDocument();
});
