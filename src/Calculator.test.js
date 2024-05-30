import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from './Calculator';

// Ensures all the buttons and initial display are rendered correctly.

describe('Calculator', () => {
  test('renders calculator correctly', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    expect(getByText('C')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('+')).toBeInTheDocument();
    expect(getByDisplayValue('')).toBeInTheDocument();
  });

 // Simulates clicking on buttons with numbers and confirms that the input is displayed correctly.

  test('number input', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('4'));
    expect(getByDisplayValue('234')).toBeInTheDocument();
  });

// Simulates an addition operation and verifies the result.

  test('addition', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByDisplayValue('')).toBeInTheDocument();
    expect(getByText('= 5')).toBeInTheDocument();
  });

  // Simulates a subtraction operation and verifies the result.

  test('subtraction', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('='));
    expect(getByDisplayValue('')).toBeInTheDocument();
    expect(getByText('= 1')).toBeInTheDocument();
  });

  // Simulates a multiplication operation and verifies the result.

  test('multiplication', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByDisplayValue('')).toBeInTheDocument();
    expect(getByText('= 9')).toBeInTheDocument();
  });

  // Simulates a division operation and verifies the result.

  test('division', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByDisplayValue('')).toBeInTheDocument();
    expect(getByText('= 3')).toBeInTheDocument();
  });

  // Simulates entering a calculation and then clearing it, verifying that the input and result are cleared.

  test('clear', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('C'));
    expect(getByDisplayValue('')).toBeInTheDocument();
    expect(() => getByText('= 9')).toThrow();
  });

  // Simulates an invalid input (like multiple consecutive operators) and verifies that the error is handled correctly.

  test('invalid input', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('='));
    expect(getByText('= Error')).toBeInTheDocument();
  });
});