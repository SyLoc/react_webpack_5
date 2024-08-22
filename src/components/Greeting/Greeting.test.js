import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  test('renders the correct greeting message', () => {
    render(<Greeting name="Loc" partnerName="John" country="VietNam" />);
    
    const greetingElement = screen.getByText(/hello, John!/i);
    const introductionElement = screen.getByText(/I'm Loc and I come from VietNam./i);
    const greetingId = screen.getByTestId('greeting')
    
    expect(greetingElement).toBeInTheDocument();
    expect(introductionElement).toBeInTheDocument();
    expect(greetingId).toHaveTextContent('Hello, John!');
  });

  test('renders a default message when no name is provided', () => {
    render(<Greeting name="" />);
    
    const defaultGreetingElement = screen.getByText(/hello, !/i);
    
    expect(defaultGreetingElement).toBeInTheDocument();
  });
});
