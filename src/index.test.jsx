// import React from 'react'
// import { render, screen } from '@testing-library/react'
// import Root from './routers/root'

// describe('Root', () => {
//   it('renders a heading', () => {
//     render(<Root />)

//     const heading = screen.getByRole('heading', {
//       name: /welcome to react\.js!/i,
//     })

//     expect(heading).toBeInTheDocument()
//   })
// })

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});