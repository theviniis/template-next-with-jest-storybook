import { render } from '@testing-library/react'
import { Main } from './main'

describe('<Main />', () => {
  it('should render', () => {
    const { getByRole } = render(<Main />)
    expect(getByRole('heading', { name: /main/i })).toBeInTheDocument()
  })
})
