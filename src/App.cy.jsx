import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('With React Testing Libinstall rary', () => {
  const initialState = { output: 10 };

  let store;

  it('Shows "Mushroom"', () => {
    const { getByText } = render(<App />);

    expect(getByText('mushroom')).not.toBeNull();
  });
});
