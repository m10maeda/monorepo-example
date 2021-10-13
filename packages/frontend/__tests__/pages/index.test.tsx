import React from 'react';

import Home from '../../src/pages/index';
import { render, screen } from '../testUtils';

test('renders learn Next.js link', () => {
  render(<Home />, {});
  const element = screen.getByText(/Next.js!/i);
  expect(element).toBeInTheDocument();
});

it('failure test', () => {
  expect(true).toBeFalsy();
});
