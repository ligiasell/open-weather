import Header from './header'
import { screen, render, fireEvent } from '@testing-library/react'

describe('Header', () => {
  const location = 'London'
  const onChange = jest.fn()
  const onClick = jest.fn()

  const renderHeader = () => {
    render(<Header location={location} onChange={onChange} onClick={onClick} />)
  }

  test('should render header component', () => {
    renderHeader()

    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  test('should click button', async () => {
    renderHeader()

    const button = screen.getByRole('button')

    await fireEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
