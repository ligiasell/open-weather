import { render, screen } from '@testing-library/react'
import App from './App'

test('should render app component', () => {
  render(<App />)

  expect(screen.getByTestId('app')).toBeInTheDocument()
})
