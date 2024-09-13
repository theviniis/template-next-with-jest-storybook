import { render, screen } from '@testing-library/react'
import { Logo } from './logo'
import { logoMock } from './logo.mock'

describe('<Logo />', () => {
  it('should render a logo element', () => {
    render(<Logo {...logoMock} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('should render a logo element with a class name', () => {
    render(<Logo {...logoMock} className="test-class" />)
    expect(screen.getByRole('img')).toHaveClass('test-class')
  })
})
