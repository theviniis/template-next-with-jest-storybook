import { render, screen } from '@testing-library/react'
import { Main } from './main'
import { mainMock } from './main.mock'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main {...mainMock} />)
    const regexp = new RegExp(mainMock.title, 'i')
    expect(screen.getByRole('heading', { name: regexp })).toBeInTheDocument()
  })
})
