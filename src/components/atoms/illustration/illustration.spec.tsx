import { render, screen } from '@testing-library/react'
import { Illustration } from './illustration'
import { illustrationMock } from './illustration.mock'

describe('<Illustration />', () => {
  it('should render a illustration element', () => {
    render(<Illustration {...illustrationMock} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('should render a illustration element with a class name', () => {
    render(<Illustration {...illustrationMock} className="test-class" />)
    expect(screen.getByRole('img')).toHaveClass('test-class')
  })
})
