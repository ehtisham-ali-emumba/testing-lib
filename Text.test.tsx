/**
 * @format
 */

import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {Text} from 'react-native';

const CustomUI = () => {
  return <Text testID="text-ui">data</Text>;
};

describe('Clickable Text', () => {
  it('Check Text exists', async () => {
    render(<CustomUI />);
    const TextComp = await screen.getByTestId('text-ui');
    expect(TextComp).toBeTruthy();
  });
});
