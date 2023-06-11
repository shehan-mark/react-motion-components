import React from 'react';
import { render } from '@testing-library/react';

import Button from './button';

describe('Button', () => {
  // test('renders the Button component', () => {
  //   render(<Button buttonText="Test Button" action={() => console.log('clicked')} />);
  // });
  const renderComponent = () => render(<Button buttonText="Test Button" action={() => console.log('clicked')} />);
  it('should have something', () => {
    const { findByRole } = renderComponent();
    const buttonComp = findByRole('button');
    expect(buttonComp).toHaveAttribute('type', 'button');
  });
});
