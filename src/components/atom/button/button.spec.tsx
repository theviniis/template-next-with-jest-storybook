import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('<Button />', () => {
  it('should render a button element', () => {
    render(<Button />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should render a button element with a class name', () => {
    render(<Button className="test-class" />)
    expect(screen.getByRole('button')).toHaveClass('test-class')
  })
})
