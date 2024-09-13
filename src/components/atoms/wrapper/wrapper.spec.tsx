import { render, screen } from '@testing-library/react'
import { Wrapper } from './wrapper'

describe('<Wrapper />', () => {
  it('should render a wrapper element', () => {
    render(
      <Wrapper>
        <h1>Wrapper</h1>
      </Wrapper>,
    )
    const element = screen.getByRole('heading', { name: /Wrapper/i })
    expect(element).toBeInTheDocument()
  })
})
