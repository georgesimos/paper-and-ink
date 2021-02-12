import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard Page', () => {
  test('renders learn react link', () => {
    render(<Dashboard />);
    const infoBoxElement = screen.getByText(/Sales Today/i);
    expect(infoBoxElement).toBeInTheDocument();
  });
});
